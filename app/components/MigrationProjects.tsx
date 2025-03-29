"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaFileAlt,
  FaFileSignature,
  FaBroom,
  FaListAlt,
  FaUserTag,
  FaCheckCircle,
  FaFileCsv,
} from "react-icons/fa";

const cards = [
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

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 20 : -20,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? 20 : -20,
  }),
};

export default function MigrationProjects() {
  const [currentCard, setCurrentCard] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen px-4">
      <h2 className="text-3xl font-bold text-white mb-6">
        OCR Migration Pipeline
      </h2>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.h3
          key={`card-title-${currentCard}`}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-2xl font-semibold text-emerald-400 mb-4"
        >
          {cards[currentCard].title}
        </motion.h3>
      </AnimatePresence>

      <div className="relative max-w-2xl w-full text-white rounded-lg shadow-lg p-8 bg-gray-900">
        <button
          onClick={handlePrev}
          className="absolute left-[-2.5rem] top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 hover:text-white transition"
        >
          &lt;
        </button>

        <div className="text-left space-y-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`card-${currentCard}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {cards[currentCard].steps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 mb-4">
                  <div className="mt-1">{step.icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg text-emerald-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="absolute right-[-2.5rem] top-1/2 transform -translate-y-1/2 text-2xl text-gray-400 hover:text-white transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
