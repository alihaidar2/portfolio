"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default function ContactPage() {
  return (
    <div className="h-screen px-4 text-white flex flex-col items-center justify-center overflow-hidden">
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          Let&apos;s Work Together
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Have a project in mind or just want to say hello? Reach out — I
          usually respond within 24 hours.
        </p>
        <a
          href="mailto:ahaidar97@outlook.com"
          className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg transition duration-300 text-lg"
        >
          📧 Send me an email
        </a>

        {/* Social Links */}
        <div className="mt-8">
          <p className="text-gray-400 mb-4 text-sm">Or connect with me:</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/alihaidar2"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[2.5rem] text-white"
              />
            </a>

            <a
              href="https://linkedin.com/in/ahaidar97"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[2.5rem] text-white"
              />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125"
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                className="text-[2.5rem] text-white"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
