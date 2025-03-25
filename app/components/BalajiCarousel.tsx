"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function BalajiCarousel() {
  // Hardcoded array referencing each file in /public/balaji_food_images
  const balajiImages = [
    "/balaji_food/sales-overview.png",
    "/balaji_food/sales-overview.png",
    "/balaji_food/time-weekly-sales-pattern.png",
    "/balaji_food/transaction-payment-insights.png",
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? balajiImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === balajiImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 w-full max-w-4xl mx-auto relative flex items-center justify-center">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>

      {/* The screenshot */}
      <Image
        src={balajiImages[index]}
        alt={`Balaji Image #${index + 1}`}
        width={1000}
        height={600}
        className="rounded object-cover"
      />

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </button>
    </div>
  );
}
