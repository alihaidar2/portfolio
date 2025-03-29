"use client";

// import ETLPipeline from "@/components/ETLPipeline";
import {
  FaFileAlt,
  FaFileSignature,
  FaBroom,
  FaListAlt,
  FaUserTag,
  FaCheckCircle,
  FaFileCsv,
} from "react-icons/fa";
import ETLPipeline from "./ETLPipeline";

export default function MigrationProjects() {
  // The same array you had before, but we’ll rename it “migrationCards”
  const migrationCards = [
    {
      title: "Extract",
      steps: [
        {
          title: "Document Intake & Preprocessing",
          description:
            "Scanned PDFs are uploaded and filtered. Pages are rotated for consistency and low-quality pages are removed to prepare for OCR.",
          icon: <FaFileAlt className="text-emerald-400 text-4xl mt-4" />,
        },
        {
          title: "OCR Setup & Text Extraction",
          description:
            "Tesseract OCR is configured and run to extract raw text from scanned images. Multiple iterations are done to improve accuracy.",
          icon: <FaFileSignature className="text-emerald-400 text-4xl mt-4" />,
        },
      ],
    },
    {
      title: "Transform",
      steps: [
        {
          title: "Text Cleaning & Noise Filtering",
          description:
            "Extracted text is cleaned using regex and heuristics to remove gibberish, whitespace-heavy lines, and formatting artifacts.",
          icon: <FaBroom className="text-emerald-400 text-4xl mt-4" />,
        },
        {
          title: "Metadata Field Extraction",
          description:
            "Key metadata fields like title, publisher, year, and language are extracted using rules and API enrichment (ISBNdb, Google Books).",
          icon: <FaListAlt className="text-emerald-400 text-4xl mt-4" />,
        },
        {
          title: "Location, Author & Entity Recognition",
          description:
            "Canadian cities and provinces are matched against known lists, while authors and entities are extracted using MiCore and regex.",
          icon: <FaUserTag className="text-emerald-400 text-4xl mt-4" />,
        },
      ],
    },
    {
      title: "Load",
      steps: [
        {
          title: "Validation & QA Checks",
          description:
            "All extracted metadata is validated through custom rules and cross-referenced with document structure to avoid false positives.",
          icon: <FaCheckCircle className="text-emerald-400 text-4xl mt-4" />,
        },
        {
          title: "Export to Structured Format",
          description:
            "Cleaned and enriched metadata is exported into standardized CSV format, with automated checks to ensure accuracy and completeness.",
          icon: <FaFileCsv className="text-emerald-400 text-4xl mt-4" />,
        },
      ],
    },
  ];

  return (
    <ETLPipeline
      pipelineTitle="OCR Migration Pipeline"
      cards={migrationCards}
    />
  );
}
