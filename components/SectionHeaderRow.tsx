import { sections } from "@/lib/RoessnerSlides";
import { hColor } from "@/lib/RoessnerStyle";
import React from "react";
import { cn } from "@/lib/utils";

export function SectionHeaderRow({
  handleSectionClick,
  className,
  isMain,
}: {
  handleSectionClick: (name: string) => void;
  isMain: boolean;
  className?: string;
}) {
  return (
    <section className={cn(!isMain && "w-full", className)}>
      {/* Sections */}
      <div
        className={cn(
          "mt-8",
          !isMain && "pb-4 bg-black text-xl text-center",
        )}
        style={isMain ? { fontSize: "17px", fontStretch: "condensed" } : { letterSpacing:'1px'}}
      >
        {sections.map((section, index) => (
          <span key={index}>
            <a
              href={`#${section.name}`}
              onClick={() => handleSectionClick(section.name)}
              className={cn("py-2", hColor, "uppercase font-bold hover:text-white")}
            >
              {section.name}
            </a>
            {index < sections.length - 1 && <span className="text-white py-2 px-1">&#8226;</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
