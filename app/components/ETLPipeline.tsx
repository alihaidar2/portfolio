"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define data structures for your pipeline
interface Step {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ETLCard {
  title: string;
  steps: Step[];
}

interface ETLPipelineProps {
  // Title shown at the top, e.g. "OCR Migration Pipeline"
  pipelineTitle: string;
  // The array of ETL segments (e.g. Extract, Transform, Load)
  cards: ETLCard[];
}

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

export default function ETLPipeline({
  pipelineTitle,
  cards,
}: ETLPipelineProps) {
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
      {/* Pipeline Title */}
      <h2 className="text-3xl font-bold text-white mb-6">{pipelineTitle}</h2>

      {/* Card Title */}
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

      {/* Card Body */}
      <div className="relative max-w-2xl w-full text-white rounded-lg shadow-lg p-8 bg-gray-900">
        {/* Left Button */}
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

        {/* Right Button */}
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
