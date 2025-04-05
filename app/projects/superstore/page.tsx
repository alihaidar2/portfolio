"use client";

import Image from "next/image";

export default function SuperstorePage() {
  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      {/* 1) TITLE & INTRO */}
      <section className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold">
          Superstore{" "}
          <span className="text-emerald-400">Performance Dashboard</span>
        </h1>
        <p className="mt-4 text-gray-300">
          A Power BI dashboard solution analyzing sales, customer segments, and
          shipping operations using Superstore data. Designed to help retail
          businesses uncover key insights and optimize performance.
        </p>
      </section>

      {/* 2) BUSINESS CONTEXT */}
      <section className="max-w-4xl mx-auto mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Business Challenge
        </h2>
        <p className="text-gray-300">
          Many retailers lack the ability to quickly assess performance across
          departments, customer segments, and shipping logistics. This dashboard
          helps decision-makers detect patterns, spot inefficiencies, and take
          action.
        </p>
      </section>

      {/* 3) TECH STACK */}
      <section className="max-w-4xl mx-auto mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Power BI for dashboard creation</li>
          <li>DAX for KPIs & calculated columns</li>
          <li>Superstore dataset (CSV format)</li>
          <li>Excel/Pandas for preprocessing</li>
        </ul>
      </section>

      {/* 4) DASHBOARD - PART 1 */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Product & Customer Sales Performance
        </h2>
        <Image
          src="/superstore/superstore_sales.png"
          alt="Sales Dashboard"
          width={1200}
          height={700}
          className="rounded-lg shadow-lg mb-4"
        />
        <ul className="list-disc list-inside text-gray-300">
          <li>2.3M in sales and 286K in profit tracked over 4 years</li>
          <li>Segment analysis across Consumer, Corporate, and Home Office</li>
          <li>
            Top categories and sub-categories by sales, quantity, and profit
          </li>
        </ul>
      </section>

      {/* 5) DASHBOARD - PART 2 */}
      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Operational & Weekly Performance Insights
        </h2>
        <Image
          src="/superstore/superstore_operations.png"
          alt="Operations Dashboard"
          width={1200}
          height={700}
          className="rounded-lg shadow-lg mb-4"
        />
        <ul className="list-disc list-inside text-gray-300">
          <li>Delays by shipping method visualized clearly</li>
          <li>Order trends by weekday help optimize operations</li>
          <li>
            Discount vs. Profitability scatter plot reveals ineffective
            discounting
          </li>
        </ul>
      </section>

      {/* 6) CONTRIBUTIONS */}
      <section className="max-w-4xl mx-auto mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          My Contributions
        </h2>
        <p className="text-gray-300">
          I independently built this dashboard end-to-end: from cleaning the
          data to designing DAX measures and crafting a user-friendly Power BI
          interface tailored for business decision-makers.
        </p>
      </section>

      {/* 7) OPTIONAL DEMO OR REPORT DOWNLOAD */}
      {/* <section className="max-w-4xl mx-auto mb-10">
        <p className="text-gray-300">
          <a
            href="/superstore/superstore_report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline hover:text-emerald-300 transition"
          >
            Download the full report
          </a>{" "}
          to explore the insights, metrics, and design behind this dashboard.
        </p>
      </section> */}

      {/* FOOTNOTE */}
      <p className="text-sm text-gray-400 italic text-center mt-2">
        *All visuals are based on sample Superstore data for demonstration
        purposes.
      </p>
    </div>
  );
}
