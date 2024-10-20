import { cn } from "@/lib/utils";
import React from "react";
import { hColor } from "@/lib/RoessnerStyle";

export default function Footer() {
  return (
    <>
      <section className="flex md:hidden flex-row w-screen -mx-4 -my-10">
        <img src="/images/roessner_email_01.webp" alt="" className="w-full"/>
      </section>
      <footer className={cn(
        'flex',
        'bg-white text-white lg:text-xl lg:tracking-widest',
        'lg:bg-black -mx-4 lg:mx-0 -mb-2 lg:-mb-0',
        'pt-6 px-4 lg:px-20'
      )}>
        <div className="flex-1 flex justify-start">
          <div className="hidden lg:block text-nowrap">
            <i className={cn(hColor)}>Call:</i>
            <a href="tel:908-963-0983" className="text-white px-2 font-bold">
              908-963-0983
            </a>
          </div>
          <div className="hidden lg:block text-nowrap lg:pl-4">
            <i className={cn(hColor)}>Email:</i>
            <a href="mailto:gil@roessner.net" className="text-white px-2 font-bold">
              gil@roessner.net
            </a>
          </div>
        </div>
        <div className="text-black lg:text-gray-300 italic text-xs md:text-sm pt-4 lg:pt-2 leading-loose">
          All content &copy; Roessner & Co.
        </div>
      </footer>
    </>
  );
}
