import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center mt-16">
      {/* Hero Text */}
      <h1 className="text-5xl font-bold animate-fade-in">
        Hello, I&apos;m <span className="text-blue-400">Ali Haidar</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Full Stack Developer | Data Engineer | AI Enthusiast
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link href="/projects">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            View Projects
          </button>
        </Link>
        <Link href="/contact">
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex space-x-4">
        <a
          href="https://github.com/alihaidar2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/github.svg"
            alt="GitHub"
            width={32}
            height={32}
            className="invert hover:scale-110 transition duration-300"
          />
        </a>
        <a
          href="https://linkedin.com/in/ahaidar97"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="linkedin.svg"
            alt="LinkedIn"
            width={32}
            height={32}
            className="invert hover:scale-110 transition duration-300"
          />
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <Image
            src="resume.svg"
            alt="Resume"
            width={32}
            height={32}
            className="invert hover:scale-110 transition duration-300"
          />
        </a>
      </div>
    </div>
  );
}
