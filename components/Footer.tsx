import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/20 bg-light text-dark">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <span className="text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} All Rights Reserved
        </span>

        {/* Center / Brand */}
        <span className="font-semibold text-lg tracking-wide">
          SM.Tamzid
        </span>

        {/* Right Links */}
        <div className="flex gap-6 text-sm md:text-base">
          <Link href="/about" className="hover:underline transition">
            About
          </Link>
          <Link href="/contact" className="hover:underline transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}