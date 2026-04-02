import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 ">
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <p className="text-lg lg:text-2xl font-extrabold">
              <span className="bg-gradient-to-r from-green-500 to-purple-800 bg-clip-text text-transparent uppercase">
                Civic.Ai
              </span>
            </p>
            <p className="text-sm text-gray-400 mt-2 max-w-xs">
              Turning citizen voices into actionable reports for a better Dhaka.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10 text-sm">
            <div>
              <p className="font-semibold mb-2">Quick Links</p>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <Link href="/add-complaint" className="hover:text-green-400">
                    Report Issue
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-purple-400">
                    City Insights
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">About</p>
              <ul className="space-y-1 text-gray-400">
                <li className="hover:text-green-400 cursor-pointer">
                  How it works
                </li>
                <li className="hover:text-purple-400 cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white/10 pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Civic.Ai — Built for Hackathon 🚀
        </div>
      </div>
    </footer>
  );
};

export default Footer;