import {cn} from "@/lib/utils";
import React from "react";
import {hColor} from "@/lib/RoessnerStyle";

export default function Footer() {
    return (<footer className="sm:flex text-white pt-10 sm:justify-between">
        <div className="block">
            <div className="block sm:inline text-nowrap">
                <i className={cn(hColor)}>Call:</i>
                <a href="tel:908-963-0983" className="text-white px-4 font-bold">
                    908-963-0983
                </a>
            </div>
            <div className="block sm:inline text-nowrap">
                <i className={cn(hColor)}>Email:</i>
                <a href="mailto:gil@roessner.net" className="text-white px-4 font-bold">
                gil@roessner.net
                </a>
            </div>
        </div>
        <div className="text-white">&copy; Roessner & Co.</div>
    </footer>)
}
