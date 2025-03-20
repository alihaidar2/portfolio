import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo / Brand Name */}
        <h1 className="text-2xl font-bold text-white">My Portfolio</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
