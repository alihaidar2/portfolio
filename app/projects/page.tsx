"use client";

import { useState } from "react";
import DashboardProjects from "../components/DashboardProjects";
import MigrationProjects from "../components/MigrationProjects";

export default function Projects() {
  // "dashboard" is the default tab (prioritized)
  const [activeTab, setActiveTab] = useState<"dashboard" | "migrations">(
    "dashboard"
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white text-center pt-24 px-4">
      {/* Page Title */}
      <h1 className="text-5xl font-bold animate-fade-in">
        My <span className="text-emerald-400">Projects</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl">
        A quick look at some of the work I’ve done, focusing on
        <span className="text-emerald-400 font-semibold">
          {" "}
          Dashboard Development
        </span>
        and{" "}
        <span className="text-emerald-400 font-semibold">Data Migrations</span>.
      </p>

      {/* Tabs / Buttons to switch between 'Dashboard' & 'Migrations' */}
      <div className="flex space-x-4 mt-8">
        <button
          className={`px-6 py-3 border rounded-lg transition ${
            activeTab === "dashboard"
              ? "bg-emerald-500 text-white border-emerald-600"
              : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard Projects
        </button>

        <button
          className={`px-6 py-3 border rounded-lg transition ${
            activeTab === "migrations"
              ? "bg-emerald-500 text-white border-emerald-600"
              : "bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700"
          }`}
          onClick={() => setActiveTab("migrations")}
        >
          Migration Projects
        </button>
      </div>

      {/* Conditionally Render Dashboard or Migration Projects */}
      <div className="mt-6 flex flex-col space-y-4 items-center">
        {activeTab === "dashboard" ? (
          <DashboardProjects />
        ) : (
          <MigrationProjects />
        )}
      </div>
    </div>
  );
}

/* 
  Just for demo: define placeholder components for "DashboardProjects" 
  and "MigrationProjects". 
  In a real setup, you could move these into separate components 
  in your /components folder.
*/
