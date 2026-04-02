"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">

        {/* Logo */}
        <p className="text-lg lg:text-2xl font-extrabold">
          <span className="bg-gradient-to-r from-green-500 to-purple-800 bg-clip-text text-transparent uppercase">
            Civic.Ai
          </span>
        </p>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <Link href="/add-complaint" className="hover:text-green-500 transition">
            Add Complaint
          </Link>
          <Link href="/dashboard" className="hover:text-purple-500 transition">
            Show Stats
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md px-4 pb-4 space-y-3 text-center">
          <Link
            href="/add-complaint"
            className="block py-2 hover:text-green-400"
            onClick={() => setOpen(false)}
          >
            Add Complaint
          </Link>
          <Link
            href="/dashboard"
            className="block py-2 hover:text-purple-400"
            onClick={() => setOpen(false)}
          >
            Show Stats
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;