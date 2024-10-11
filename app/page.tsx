'use client'

import React from "react";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import useCarouselHelpers from "@/app/useCarouselHelpers";
import {allItems, indexOfSectionStart, sections} from "@/lib/RoessnerSlides";
import {SectionHeaderRow} from "@/components/SectionHeaderRow";

export default function Home() {
    const {setActiveIndex, activeIndex, setApi} = useCarouselHelpers()

    const handleSectionClick = (sectionName: string) => {
        console.info("Click", sectionName);
        setActiveIndex(indexOfSectionStart(sectionName));
    }

    return (
        <>
            <section className="flex flex-row w-full">
                <div className="w-1/2 sm:text-nowrap">
                    <h1 className={`sm:pt-10 text-xl sm:text-4xl leading-tight font-bold uppercase text-nowrap text-amber-400`}>Roessner & Co.</h1>
                    <div className="hidden md:block pt-8 xl:text-2xl lg:text-xl md:text-l">
                        <p className="pb-2 text-white">The source for outstanding graphic design.</p>
                        <p className="pb-2 ml-4 text-white">Customer focused, strategy driven.</p>
                        <p className="pb-2 text-white">Delivered on time and on budget.</p>
                        <p className="pb-2 ml-4 text-white">From concept through completion.</p>
                        <p className="pb-2 text-white">For print, online, and video.</p>
                    </div>
                    <div className="pt-1 text-white md:hidden">
                        The source for quality graphic design and creative services for print, online and video projects.
                    </div>
                </div>
                <div className="w-1/2 py-30 lg:pt-0 md:pt-5 md:pl-3">
                    <img src="/images/logo2_bg_cropped.webp" alt="Roessner & Co. Logo" className="w-full sm:-mt-5 sm:-mb-40" />
                </div>
            </section>


            <div className="sm:hidden">
            {sections.map((section, sectionIndex) => <div key={sectionIndex} className="">
                <a id={section.name} />
                <SectionHeaderRow {...{handleSectionClick}} />
                {section.images.map((imageURI, imageIndex) =>
                    <a key={`${sectionIndex}.${imageIndex}`} href={"/slide/" + imageURI}><img src={'/images/slides/' + imageURI} alt={imageURI} className="border-2 border-gray-600 mb-2 bg-white"/></a>
                )}
            </div>)}
            </div>

            <section className="hidden sm:block">
                <SectionHeaderRow {...{handleSectionClick}} />
                <Carousel className="border-gray-500 border-l-4 border-r-4" setApi={setApi}>
                    <CarouselContent>
                        {allItems.map(({key, imageURI}) =>
                            <CarouselItem key={key}
                                          className="basis-1/3 text-white border-gray-500 border-4 border-r-0 px-0 py-0">
                                <a href={"/slide/" + imageURI}>
                                    <img src={'/images/slides/' + imageURI} alt={imageURI} className="border-0 bg-white"/>
                                </a>
                            </CarouselItem>)}
                    </CarouselContent>
                </Carousel>
                <nav className="flex justify-center mt-4">
                    <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
                        onClick={() => { if (activeIndex > 0) setActiveIndex(activeIndex - 1)}}
                    >
                        &laquo;
                    </button>
                    <span className="bg-gray-200 py-2 px-4 text-black">{activeIndex + 1} / {allItems.length}</span>
                    <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
                        onClick={() => {if (activeIndex < allItems.length - 1) setActiveIndex(activeIndex + 1)}}
                    >
                        &raquo;
                    </button>
                </nav>
            </section>
        </>
    )
}
