import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen px-4 text-white flex flex-col items-center justify-center overflow-hidden">
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold animate-fade-in">
          Hello, I&apos;m <span className="text-emerald-400">Ali</span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Full Stack Developer | Data Engineer | AI Enthusiast
        </p>

        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/projects">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              View Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-gray-900 text-white font-semibold rounded-lg shadow-lg transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
