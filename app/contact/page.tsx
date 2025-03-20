import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white text-center mt-16">
      {/* Title */}
      <h1 className="text-5xl font-bold animate-fade-in">
        Get in <span className="text-blue-400">Touch</span>
      </h1>

      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        Want to discuss a project, collaboration, or just say hello? Reach out
        to me!
      </p>

      {/* Contact Methods */}
      <div className="mt-6 flex flex-col space-y-4">
        <a
          href="mailto:your.email@example.com"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Send an Email
        </a>
        <a
          href="https://linkedin.com/in/ahaidar97"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Connect on LinkedIn
        </a>
      </div>

      {/* Back to Home Button */}
      <div className="mt-6">
        <Link href="/">
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg shadow-lg transition duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
