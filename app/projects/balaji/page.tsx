"use client";

import Image from "next/image";
import ETLPipeline from "@/app/components/ETLPipeline";
import { FaFileAlt, FaBroom, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function BalajiFoodsPage() {
  const pipeline = {
    pipelineTitle: "Balaji Foods Sales Pipeline",
    pipelineDescription:
      "An end-to-end ETL pipeline to clean transaction data and analyze weekly performance, revenue patterns, and payment trends using Power BI dashboards.",
    pipelineTools: "Python, Pandas, Power BI, DAX",
    cards: [
      {
        title: "Extract",
        steps: [
          {
            title: "Raw Sales Data Collection",
            description:
              "Imported sales data from multiple sources with inconsistent date formats (dd-mm-yyyy, mm/dd/yyyy) and missing fields.",
            icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
          },
          {
            title: "Initial Validation",
            description:
              "Validated basic structure and flagged corrupted or empty rows, ensuring no duplicate entries or broken headers.",
            icon: <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />,
          },
        ],
      },
      {
        title: "Transform",
        steps: [
          {
            title: "Standardize & Clean",
            description:
              "Standardized date fields using custom date parsing logic and calculated derived columns (e.g., day of week, month, year).",
            icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
          },
          {
            title: "Feature Engineering",
            description:
              "Created new columns like calculated_amount and filled missing transaction types. Verified consistency of item_price * quantity = transaction_amount.",
            icon: <FaChartLine className="text-emerald-400 text-4xl mt-4" />,
          },
        ],
      },
      {
        title: "Load",
        steps: [
          {
            title: "Load to Power BI",
            description:
              "Exported cleaned CSV to Power BI and built visuals tracking sales, quantity, and trends across products, time, and payment types.",
            icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-24 px-4 text-white">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto mb-10">
        <h1 className="text-4xl font-bold">
          Balaji Foods <span className="text-emerald-400">Sales Dashboard</span>
        </h1>
        <p className="mt-4 text-gray-300">
          This Power BI dashboard tracks weekly sales, item performance, and
          payment breakdowns for a fictional fast-food business. Built after a
          robust ETL pipeline to clean and engineer raw transaction data.
        </p>
      </section>

      {/* BUSINESS CONTEXT */}
      <section className="max-w-4xl mx-auto mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Business Challenge
        </h2>
        <p className="text-gray-300">
          Without structured reporting, Balaji Foods lacked clarity on its
          top-performing items, busiest sales periods, and overall trends. A
          clean data pipeline and visual dashboard helped bring clarity to
          day-by-day patterns and weekly performance.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="max-w-4xl mx-auto mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">Tech Stack</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Python & Pandas for data cleaning</li>
          <li>Custom logic for date parsing and verification</li>
          <li>Power BI with DAX for KPIs and visuals</li>
          <li>CSV files as raw and output datasets</li>
        </ul>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="max-w-4xl mx-auto mt-10 mb-10">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          Dashboard Highlights
        </h2>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-2">
            1. Product Performance & Sales Composition
          </h3>
          <Image
            src="/balaji/product-insights.png"
            alt="Product Insights Dashboard"
            width={1200}
            height={700}
            className="rounded-lg shadow-lg"
          />
          <ul className="text-gray-300 list-disc list-inside mt-4">
            <li>Top product by revenue: Sandwich</li>
            <li>Top product by quantity sold: Cold coffee (1,361 units)</li>
            <li>Fast food contributes the majority of sales</li>
            <li>
              Cold coffee, Sugarcane juice, and Panipuri are high-quantity
              sellers
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-2">
            2. Sales Overview by Time
          </h3>
          <Image
            src="/balaji/sales-overview.png"
            alt="Sales Overview Dashboard"
            width={1200}
            height={700}
            className="rounded-lg shadow-lg"
          />
          <ul className="text-gray-300 list-disc list-inside mt-4">
            <li>Total sales: $275K</li>
            <li>Average daily sales: $790.89</li>
            <li>Sales peaked in May, dipped in June</li>
            <li>Sales consistent across quarters</li>
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-white mb-2">
            3. Sales Patterns by Weekday & Time
          </h3>
          <Image
            src="/balaji/time-weekly-sales-pattern.png"
            alt="Time-based Sales Patterns Dashboard"
            width={1200}
            height={700}
            className="rounded-lg shadow-lg"
          />
          <ul className="text-gray-300 list-disc list-inside mt-4">
            <li>Monday has the highest total sales</li>
            <li>Friday and Tuesday are the lowest sales days</li>
            <li>Afternoon and Night are the most active time slots</li>
            <li>Heatmap shows Afternoon activity across all days</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-2">
            4. Transaction & Payment Type Insights
          </h3>
          <Image
            src="/balaji/transaction-payment-insights.png"
            alt="Transaction Type Insights Dashboard"
            width={1200}
            height={700}
            className="rounded-lg shadow-lg"
          />
          <ul className="text-gray-300 list-disc list-inside mt-4">
            <li>Total transactions: 1,000,000</li>
            <li>Average transaction value: $275.23</li>
            <li>Cash: 476K transactions | $132,840 total</li>
            <li>Online: 417K transactions | $110,595 total</li>
            <li>Other: 107K transactions | $31,795 total</li>
            <li>Cash is the dominant payment method</li>
            <li>Highest transaction volume in May</li>
          </ul>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="max-w-4xl mx-auto mb-10 bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-400 mb-4">
          My Contributions
        </h2>
        <p className="text-gray-300">
          I led the entire ETL and visualization process—writing Python scripts
          for data parsing, validating accuracy, performing feature engineering,
          and building the final dashboard in Power BI. Designed for
          stakeholders to identify trends and plan inventory and staffing
          accordingly.
        </p>
      </section>

      {/* REPORT DOWNLOAD */}
      <section className="max-w-4xl mx-auto mb-10">
        <p className="text-gray-300">
          <a
            href="/balaji_food/balaji_food_report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline hover:text-emerald-300 transition"
          >
            Download the full report
          </a>{" "}
          to explore insights and methodology in more detail.
        </p>
      </section>

      {/* ETL PIPELINE */}
      <ETLPipeline
        pipelineTitle={pipeline.pipelineTitle}
        pipelineDescription={pipeline.pipelineDescription}
        pipelineTools={pipeline.pipelineTools}
        cards={pipeline.cards}
      />

      <p className="text-sm text-gray-400 italic text-center mt-2">
        *This dashboard is based on simulated data for internal analytics
        demonstration.
      </p>
    </div>
  );
}
