import {sections} from "@/lib/RoessnerSlides";
import {hColor} from "@/lib/RoessnerStyle";
import React from "react";
import {cn} from "@/lib/utils";

export function SectionHeaderRow({handleSectionClick, className}: {
    handleSectionClick: (name: string) => void,
    className?: string
}) {
    return <section className={cn("flex flex-row w-full", className)}>
        {/* Sections */}
        <div className="flex justify-between items-center mt-8 sm:mt-16 pb-4 sm:pb-8 text-xs sm:text-xl sm:w-1/2 bg-black">
            {sections.map((section, index) => (
                <span
                    key={index}>
                                <a
                                    href={`#${section.name}`}
                                    onClick={() => handleSectionClick(section.name)}
                                    className={cn('py-2', hColor, 'uppercase font-bold hover:text-white')}
                                >
                                {section.name}
                                </a>
                    {index < sections.length - 1 && <span className="text-white py-2 px-2 sm:px-4">&#8226;</span>}
                            </span>
            ))}
        </div>
    </section>
}
