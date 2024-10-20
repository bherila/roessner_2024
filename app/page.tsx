"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useCarouselHelpers from "@/app/useCarouselHelpers";
import { allItems, indexOfSectionStart, sections } from "@/lib/RoessnerSlides";
import { SectionHeaderRow } from "@/components/SectionHeaderRow";
import Footer from "@/components/Footer";

const intervalTime = 4000;
const showNavUnderneath = false;

export default function Home() {
  const { setActiveIndex, activeIndex, setApi } = useCarouselHelpers();

  const handleSectionClick = (sectionName: string) => {
    console.info("Click", sectionName);
    setActiveIndex(indexOfSectionStart(sectionName));
    setIsTimerActive(true);
  };

  const [isTimerActive, setIsTimerActive] = useState(true);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (isTimerActive) {
        setActiveIndex((activeIndex + 1) % allItems.length);
      }
    }, intervalTime);

    return () => {
      clearTimeout(intervalId);
    };
  }, [intervalTime, activeIndex]);

  return (
    <>
      <div className="hidden lg:block mx-auto my-auto" style={{ width: "1300px" }}>
        <section style={{ width: "100%", height: "336px", position: "relative", overflow: "visible", zIndex: 0 }}>
          <div
            className="text-nowrap pl-20"
            style={{ position: "absolute", top: 0, display: "block", zIndex: 2 }}
          >
            <h1
              className={`pt-9 font-bold uppercase text-nowrap text-amber-500`}
              style={{ letterSpacing: "1px", scale: "1 0.9", fontSize: "36px" }}
            >
              Roessner &amp; Co.
            </h1>
            <div className="md:block pt-4 text-xl tracking-widest">
              <p className="pb-2 text-white">The source for outstanding graphic design.</p>
              <p className="pb-2 text-white">Created and produced by an experienced</p>
              <p className="pb-2 text-white">and friendly team of talented humans.</p>
              <p className="pb-2 text-white">For print, online, and video.</p>
            </div>
            <SectionHeaderRow isMain={true} {...{ handleSectionClick }} />
          </div>
          <div style={{ position: "absolute", right: "2cm", top: "0px", zIndex: 1 }}>
            <img
              src="/images/logo2_bg_cropped.webp"
              alt="Roessner & Co. Logo"
              style={{ width: "650px", height: "444px" }}
            />
          </div>
        </section>

        <section>
          <Carousel opts={{ loop: true }} className="border-gray-500 border-l-4 border-r-4 mx-10" setApi={setApi}>
            <CarouselContent>
              {allItems.map(({ key, imageURI }) => (
                <CarouselItem
                  key={key}
                  className="basis-1/3 text-white border-gray-500 border-4 border-r-0 px-0 py-0"
                >
                  <a href={"/slide/" + imageURI}>
                    <img src={"/images/slides/" + imageURI} alt={imageURI} className="border-0 bg-white" />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          {showNavUnderneath && (
            <nav className="flex justify-center mt-4">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
                onClick={() => {
                  if (activeIndex > 0) setActiveIndex(activeIndex - 1);
                  else setActiveIndex(allItems.length - 1);
                  setIsTimerActive(false);
                }}
              >
                &laquo;
              </button>
              <span className="bg-gray-200 py-2 px-4 text-black">
                {activeIndex + 1} / {allItems.length}
              </span>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={() => {
                  if (activeIndex < allItems.length - 1) setActiveIndex(activeIndex + 1);
                  else setActiveIndex(0);
                  setIsTimerActive(false);
                }}
              >
                &raquo;
              </button>
            </nav>
          )}
        </section>
        <div>
          <Footer />
        </div>
      </div>

      {/* Mobile */}

      <section className="flex lg:hidden w-screen">
        <img
          src="/images/roessner_email_00.webp"
          alt="The source for quality graphic design and creative services for print, online and video projects."
          className="w-full"
        />
      </section>

      <div className="lg:hidden px-4 py-2">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="">
            <a id={section.name} />
            {/*<SectionHeaderRow isMain={false} {...{ handleSectionClick }} />*/}
            {section.images.map((imageURI, imageIndex) => (
              <a key={`${sectionIndex}.${imageIndex}`} href={"/slide/" + imageURI}>
                <img
                  src={"/images/slides/" + imageURI}
                  alt={imageURI}
                  className="border-2 border-gray-500 mb-2 bg-white"
                />
              </a>
            ))}
          </div>
        ))}
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
