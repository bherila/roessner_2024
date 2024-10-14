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
    <section className={cn(!isMain && "flex flex-row w-full", className)}>
      {/* Sections */}
      <div
        className={cn(
          "flex justify-between items-center mt-8",
          !isMain && "sm:mt-16 pb-4 sm:pb-8 bg-black text-xs",
        )}
        style={isMain ? { fontSize: "17px", letterSpacing: "-1px", fontStretch: "ultra-condensed" } : {}}
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
