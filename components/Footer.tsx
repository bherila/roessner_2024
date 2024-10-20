import { cn } from "@/lib/utils";
import React from "react";
import { hColor } from "@/lib/RoessnerStyle";

export default function Footer() {
  return (
    <>
      <section className="lg:hidden w-screen px-2 -mx-2 -my-2">
        <img src="/images/roessner_email_01.webp" alt="" className="w-full" />
      </section>
      <footer
        className={cn(
          "flex",
          "bg-black text-white lg:text-xl lg:tracking-widest",
          "lg:bg-black -mx-2 lg:mx-0 -mb-2 lg:-mb-0",
          "-mt-2 pb-2 lg:pt-8 lg:pb-0 px-4 lg:px-24",
        )}
        style={{ fontSize: "13pt" }}
      >
        <div className="hidden lg:flex-1 lg:flex lg:justify-start">
          <div className="hidden lg:block text-nowrap">
            <i className={cn(hColor)}>Call:</i>
            <a href="tel:908-963-0983" className="text-white px-2">
              908-963-0983
            </a>
          </div>
          <div className="hidden lg:block text-nowrap lg:pl-4">
            <i className={cn(hColor)}>Email:</i>
            <a href="mailto:gil@roessner.net" className="text-white px-2">
              gil@roessner.net
            </a>
          </div>
        </div>
        <div
          className="text-gray-300 lg:text-black pl-4 lg:pl-0 lg:pr-4 lg:text-gray-300 italic pt-4 lg:pt-1 leading-loose"
          style={{ fontSize: "8pt" }}
        >
          All content &copy; Roessner & Co.
        </div>
      </footer>
    </>
  );
}
