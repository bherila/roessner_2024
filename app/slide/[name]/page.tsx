// import 'server-only'
import {cn} from "@/lib/utils";
import {allItems} from "@/lib/RoessnerSlides";
import GoBackLink from "@/app/slide/[name]/GoBackLink";

export function generateStaticParams() {
    return allItems.map(item => ({name: item.imageURI}))
}

export default function Page({params}: { params: { name: string } }) {
    return <>
        <GoBackLink href={'/?index=' + allItems.findIndex(item => item.imageURI === params.name)}
           className={cn('bg-white', 'block')}>
            <img src={'/images/slides/' + params.name} alt={params.name}
                 className={cn('w-full', 'border-4', 'border-gray-400')}/>
        </GoBackLink>
    </>
}
