import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-4 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">
        My <span className="text-emerald-400">Projects</span>
      </h1>
      <p className="text-gray-300 mb-8">
        Here are some of the projects I&apos;ve worked on.
      </p>

      <Link href="/projects/balaji">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            Balaji Foods Sales Analysis
          </h2>
          <p className="text-gray-300">
            A deep dive into sales patterns, product insights, and payment
            trends Balaji Foods&apos; sales data.
          </p>
        </div>
      </Link>
    </div>
  );
}
