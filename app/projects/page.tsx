"use client";
import { useState } from "react";
import DashboardProjects from "../components/DashboardProjects";
import MigrationProjects from "../components/MigrationProjects";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "migration">(
    "dashboard"
  );

  return (
    <div className="min-h-screen pt-24 px-4 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">
        My <span className="text-emerald-400">Projects</span>
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`px-4 py-2 rounded ${
            activeTab === "dashboard"
              ? "bg-emerald-500 text-white"
              : "bg-gray-900 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Dashboard Projects
        </button>
        <button
          onClick={() => setActiveTab("migration")}
          className={`px-4 py-2 rounded ${
            activeTab === "migration"
              ? "bg-emerald-500 text-white"
              : "bg-gray-900 text-gray-300 hover:bg-gray-700"
          }`}
        >
          Migration Projects
        </button>
      </div>

      {/* Conditional Content */}
      {activeTab === "dashboard" ? (
        <DashboardProjects />
      ) : (
        <MigrationProjects />
      )}
    </div>
  );
}
