'use client'
import React, {useCallback, useMemo} from 'react'
import {CarouselApi} from "@/components/ui/carousel";
import {getURL} from "next/dist/shared/lib/utils";

const paramName = 'index';
function getUrlParam() {
    const urlParams = new URLSearchParams(window.location.search)
    const indexParam = parseInt(urlParams.get(paramName) ?? '0', 10)
    return isNaN(indexParam) ? 0 : indexParam
}

function updateUrlState(value: number) {
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set(paramName, value.toString())
    window.history.replaceState({}, "", `?${urlParams.toString()}`)
}

export default function useCarouselHelpers() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [activeIndex, setActiveIndex] = React.useState(0)

    const scrollToItem = useCallback((index: number) => {
        if (api) {
            api.scrollTo(index)
        }
    }, [api])

    React.useEffect(() => {
        if (!api) return;
        const indexParam = getUrlParam();
        if (indexParam) {
            setActiveIndex(indexParam)
            // scrollToItem will be triggered by effect below
        }
    }, [api])

    React.useEffect(() => {
        if (!api) return
        updateUrlState(activeIndex)
        scrollToItem(activeIndex)
    }, [activeIndex, api]);


    return {setActiveIndex, activeIndex, setApi}
}
