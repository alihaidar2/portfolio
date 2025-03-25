import Link from "next/link";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center mt-16">
      {/* Hero Text */}
      <h1 className="text-5xl font-bold animate-fade-in">
        Hello, I&apos;m <span className="text-emerald-400">Ali Haidar</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Full Stack Developer | Data Engineer | AI Enthusiast
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link href="/projects">
          <button
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600
 text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
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
      <div className="mt-6 flex space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/alihaidar2"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125"
        >
          <FontAwesomeIcon icon={faGithub} className="text-[2.5rem]" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ahaidar97"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-[2.5rem]" />
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform duration-300 hover:scale-125"
        >
          <FontAwesomeIcon icon={faFileAlt} className="text-[2.5rem]" />
        </a>
      </div>
    </div>
  );
}
