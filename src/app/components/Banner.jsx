import Link from "next/link";
import { FiSend } from "react-icons/fi";
const Banner = () => {
  return (
    <div className="relative bg-black flex justify-center items-center min-h-screen">
      <div className="w-[400px] lg:w-[900px] mx-auto relative z-5 p-4 mt-10 ">
        <h2 className="text-3xl lg:text-6xl text-center font-extrabold">
          <span className="bg-linear-to-r from-green-500 to-purple-800 bg-clip-text text-transparent uppercase">
            Civic.Ai
          </span>
          - Smart Complaint Assistant for Dhaka
        </h2>
        <p className="py-4 text-center">
          Turning citizen voices into actionable reports
        </p>
      {/* button design */}
        <div className="flex justify-center items-center my-4">
         <Link href="/">
          <button className="relative px-6 py-3 font-semibold text-black rounded-full overflow-hidden group animate-pulse-glow">
            <span className="relative z-10">Send Complaints <FiSend className="inline"/></span>

            {/* Background */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-purple-500 transition-all duration-500 group-hover:scale-110"></span>

            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full blur-xl opacity-0 bg-gradient-to-r from-green-400 to-purple-500 transition duration-500 group-hover:opacity-70"></span>
          </button>
         </Link>
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
