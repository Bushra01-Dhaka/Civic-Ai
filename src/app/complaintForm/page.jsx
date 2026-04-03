"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const page = () => {
  const { register, handleSubmit, watch } = useForm();
  const [today] = useState(new Date().toISOString().split("T")[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const selectedCity = watch("city");

  // Mock zones (keep simple for hackathon)
  const zones = {
    north: ["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5"],
    south: ["Zone A", "Zone B", "Zone C", "Zone D", "Zone E"],
  };

  const onSubmit = async (data) => {
    console.log(data);
    // Later: send to AI API
    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resultData = await res.json();
      setResult(resultData.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen px-4 py-20 lg:py-30 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-black/60 backdrop-blur-md p-6 rounded-2xl shadow-2xl animate-pulse-glow">
        <h2 className="text-2xl font-bold mb-8 text-center">Report an Issue</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <input
            {...register("name", { required: true })}
            placeholder="Your Name *"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 focus:outline-none"
          />

          {/* Contact + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              {...register("contact")}
              placeholder="Contact Number (optional)"
              className="p-3 rounded-lg bg-transparent border border-gray-600"
            />
            <input
              {...register("email")}
              placeholder="Email (optional)"
              className="p-3 rounded-lg bg-transparent border border-gray-600"
            />
          </div>

          {/* City Selection */}
          <div>
            <p className="mb-2">City Corporation *</p>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  value="north"
                  {...register("city", { required: true })}
                />{" "}
                Dhaka North
              </label>
              <label>
                <input
                  type="radio"
                  value="south"
                  {...register("city", { required: true })}
                />{" "}
                Dhaka South
              </label>
            </div>
          </div>

          {/* Zone */}
          <select
            {...register("zone", { required: true })}
            className="w-full p-3 rounded-lg bg-black border border-gray-600"
          >
            <option value="">Select Zone *</option>
            {selectedCity &&
              zones[selectedCity].map((z, i) => (
                <option key={i} value={z}>
                  {z}
                </option>
              ))}
          </select>

          {/* Ward */}
          <input
            {...register("ward", { required: true })}
            placeholder="Ward *"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600"
          />

          {/* Area */}
          <input
            {...register("area", { required: true })}
            placeholder="Area Name *"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600"
          />

          {/* Problem Type */}
          <select
            {...register("problemType", { required: true })}
            className="w-full p-3 rounded-lg bg-black border border-gray-600"
          >
            <option value="">Select Problem Type *</option>
            <option>Road Damage</option>
            <option>Drainage Issue</option>
            <option>Garbage Problem</option>
            <option>Water Logging</option>
            <option>Street Light Issue</option>
            <option>
              Criminal Activities( hijacking, robbery, and stealing)
            </option>
            <option>Others</option>
          </select>

          {/* Description */}
          <textarea
            {...register("description", { required: true })}
            placeholder="Describe your problem *"
            rows="4"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600"
          ></textarea>

          {/* Date */}
          <input
            type="date"
            defaultValue={today}
            {...register("date")}
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full text-black bg-gradient-to-r from-green-500 to-purple-500 font-semibold hover:scale-105 transition"
          >
            Generate Complaint
          </button>
        </form>
      </div>

      {/* Show AI Responses Here After submitting the form */}
      {loading && <p className="text-center mt-4">Generating complaint...</p>}

      {result && (
        <div className="mt-6 p-4 rounded-lg border border-gray-600 bg-black/50">
          <h3 className="font-semibold mb-2">Generated Complaint:</h3>
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>

          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="mt-3 px-4 py-2 bg-green-500 rounded-lg"
          >
            Copy
          </button>
        </div>
      )}



      {/* background radient design stuff */}
      <div className="absolute right-16 top-0 hidden lg:block">
        <div className="w-[300px] h-[300px] rounded-full bg-green-400 opacity-30 blur-3xl animate-color-fast">
          <div className="w-[100px] h-[100px]  rounded-full shadow-2xl shadow-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
