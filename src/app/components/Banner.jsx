import Link from "next/link";
const Banner = () => {
  return (
    <div className="relative bg-black flex justify-center items-center min-h-screen">
      <div className="w-[400px] lg:w-[900px] mx-auto relative z-5 p-4 ">
        <h2 className="text-3xl lg:text-6xl text-center font-extrabold">
          <span className="bg-linear-to-r from-green-500 to-purple-800 bg-clip-text text-transparent uppercase">Civic.Ai</span>- Smart Complaint
          Assistant for Dhaka
        </h2>
        <p className="py-4 text-center">
          Turning citizen voices into actionable reports
        </p>
        <div className="flex justify-center items-center my-4">
          <button className="bg-gradient-to-r from-green-500 to-violet-800 text-white p-2 lg:p-4 rounded-full shadow-lg">
            Send Complaints
          </button>
        </div>
      </div>

      <div className="absolute right-16 top-0 hidden lg:block">
        <div className="w-[300px] h-[300px] rounded-full bg-green-400 opacity-30 blur-3xl animate-color-fast">
          <div className="w-[100px] h-[100px]  rounded-full shadow-2xl shadow-green-500"></div>
        </div>
      </div>

      <div className="absolute left-16 bottom-0">
        <div className="w-[200px] h-[200px] rounded-full bg-green-400 opacity-30 blur-3xl animate-color-slow">
          <div className="w-[100px] h-[100px]  rounded-full shadow-2xl shadow-green-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
