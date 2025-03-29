import Link from "next/link";

export default function DashboardProjects() {
  return (
    <>
      <Link href="/projects/balaji">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
            Balaji Foods Sales Analysis
          </h2>
          <p className="text-gray-300">
            A deep dive into sales patterns, product insights, and payment
            trends from Balaji Foods&apos; sales data.
          </p>
        </div>
      </Link>
    </>
  );
}
