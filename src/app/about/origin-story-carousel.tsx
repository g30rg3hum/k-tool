"use client";
import precedingAnimationDelay from "@/lib/consts/motion/preceding-animation-delay";
import clsx from "clsx";
import * as motion from "motion/react-client";
import { useState } from "react";

const content = [
  {
    title: "Establishment",
    year: "1990",
    description:
      "We began as a small, humble workshop in a rented space, initially focused on producing spare parts. Since then, we've experienced rapid growth in both our workforce and machinery.",
    image: "/images/stock/1.jpg",
  },
  {
    title: "First factory",
    year: "1992",
    description:
      "Just two years later, we moved into our own 12,000 square foot semi-detached factory in Bayan Lepas — a thriving industrial hub on Penang Island, Malaysia.",
    image: "/images/stock/2.jpg",
  },
  {
    title: "Even bigger factory",
    year: "2010",
    description:
      "We then took a significant leap forward, expanding into our current state-of-the-art 28,000 square foot facility, also located in Bayan Lepas, to support our continued growth and innovation.",
    image: "/images/stock/3.jpg",
  },
  {
    title: "Continued success",
    year: "Now",
    description:
      "In addition to our main factory, we also have dedicated divisions to ensure complete client satisfaction. This includes a design center (highly competent in designing molds from package drawing and reverse engineering), manufacturing departments equipped with state-of-the-art equipment to bring designs to life, and a meticulous quality assurance department to guarantee high product quality.",
    image: "/images/stock/4.jpg",
  },
];

export default function OriginStoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentContent = content[activeIndex];

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-full relative mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: precedingAnimationDelay,
            type: "spring",
          }}
          className="absolute inset-0 -z-10"
        >
          <div className="w-full h-full bg-slate rounded-md translate-6" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: precedingAnimationDelay + 0.35,
            type: "spring",
          }}
          className="rounded-md h-130 lg:h-96 w-full border-gray-200 border flex flex-col lg:flex-row shadow-sm"
        >
          <div className="lg:w-[40%] bg-background-dark text-white p-8 rounded-t-md lg:rounded-t-none lg:rounded-l-md">
            <h4 className="font-bold text-xl">{currentContent.title}</h4>
            <p className="font-semibold mb-4 text-lg text-gray-400">
              {currentContent.year}
            </p>
            <p className="text-sm">{currentContent.description}</p>
          </div>
          <div
            className="lg:w-[60%] h-full bg-cover bg-center rounded-b-md lg:rounded-b-none lg:rounded-r-md"
            style={{
              backgroundImage: `url(${currentContent.image})`,
            }}
          />
        </motion.div>
      </div>
      <div className="flex gap-4">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              `w-3 h-3 rounded-full transition-all cursor-pointer ${
                activeIndex === index
                  ? "bg-primary opacity-100"
                  : "bg-background-dark opacity-50"
              }`
            )}
          />
        ))}
      </div>
    </div>
  );
}
