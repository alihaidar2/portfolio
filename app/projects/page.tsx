import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen pt-24 px-4 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">
        My <span className="text-emerald-400">Projects</span>
      </h1>
      <p className="text-gray-300 mb-8">
        Here&apos;s a curated selection of projects I&apos;ve worked on — each
        one showcasing a different aspect of my skills in full-stack
        development, data engineering, and interactive dashboard design. From
        transforming raw datasets into meaningful insights to building intuitive
        user interfaces, these case studies reflect my commitment to delivering
        thoughtful, data-driven solutions.
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
