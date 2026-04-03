export async function POST(req) {
  try {
    const data = await req.json();

    const prompt = `
You are an assistant helping citizens write formal complaints to Dhaka City Corporation.

Details:
Name: ${data.name}
City: ${data.city}
Zone: ${data.zone}
Ward: ${data.ward}
Area: ${data.area}
Problem Type: ${data.problemType}
Description: ${data.description}
Date: ${data.date}

Write a professional complaint including:
- Subject
- Formal body
- Polite tone
- Mention location clearly

Also provide a Bangla version after the English version.
`;

    const apiKey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const dataRes = await response.json();

    const text =
      dataRes?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response generated";

    return Response.json({ result: text });

  } catch (error) {
    console.error("API ERROR:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}