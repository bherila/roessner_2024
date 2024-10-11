'use client'

import ExportedImage from "next-image-export-optimizer";
import {useState} from "react";
import {Carousel, CarouselApi, CarouselContent, CarouselItem} from "@/components/ui/carousel";

interface Section {
  name: string;
  images: string[];
}

function rangeStrings(x: number, y: number): string[] {
  const result: string[] = [];
  for (let i = x; i <= y; i++) {
    result.push(i.toString().padStart(2, '0'));
  }
  return result;
}

const sections: Section[] = [
  { name: 'Publications', images: rangeStrings(0, 17).map((num) => `publications-${num}.webp`) },
  { name: 'Branding', images: ['branding001.webp'] },
  {name: 'Marketing', images: rangeStrings(0, 4).map((num) => `marketing-${num}.webp`) },
  {name: 'Events', images: rangeStrings(0, 5).map((num) => `events-${num}.webp`) }
  // Add more sections as needed
];



export default function Home() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleSectionClick = (sectionName: string) => {
    setActiveSection(sectionName);
    const sectionElement = document.getElementById(sectionName);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsFullScreen(true);
  };

  const handleFullScreenClick = () => {
    setIsFullScreen(false);
  };


  const [api, setApi] = useState<CarouselApi>()

  return (
      <div className="md:block bg-cover bg-center bg-no-repeat bg-black">
        <main className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 h-screen">
          <section className="flex flex-row w-full">
            <div className="w-1/2 pr-14 text-nowrap">
              <h1 className="pt-10 text-4xl leading-tight font-bold text-amber-400">Roessner & Co.</h1>
              <div className="pt-8 xl:text-2xl lg:text-xl md:text-l">
                <p className="pb-2 text-white">The source for outstanding graphic design.</p>
                <p className="pb-2 ml-4 text-white">Customer focused, strategy driven.</p>
                <p className="pb-2 text-white">Delivered on time and on budget.</p>
                <p className="pb-2 ml-4 text-white">From concept through completion.</p>
                <p className="pb-2 text-white">For print, online, and video.</p>
              </div>

              {/* Sections */}
              <div className="flex justify-between mt-8">
                {sections.map((section, index) => (
                    <a
                        key={index}
                        href={`#${section.name}`}
                        onClick={() => handleSectionClick(section.name)}
                        className="block px-4 py-2 text-white hover:text-amber-400 text-xl"
                    >
                      {section.name}
                    </a>
                ))}
              </div>

            </div>
            <div className="w-1/2 py-30 -mb-20">
              <ExportedImage src="/logo2_bg_cropped.webp" alt="Roessner & Co. Logo" width={640} height={480}/>
            </div>
          </section>

          <section>
            <Carousel className="border-gray-500 border-l-4 border-r-4">
              <CarouselContent>
                {sections.flatMap((section, sectionIndex) => {
                  return section.images.map((imageURI, imageIndex) => {
                    return <CarouselItem key={`${sectionIndex}-${imageIndex}`} className="basis-1/3 text-white border-gray-500 border-4 border-r-0 px-0 py-0">
                      <ExportedImage src={'/images/' + imageURI} alt={imageURI} width={640} height={480} />
                    </CarouselItem>
                  })
                })}
              </CarouselContent>
            </Carousel>
          </section>


          <footer className="flex justify-between text-white pt-10">
            <div className="">
              <i>Call:</i>
              <a href="tel:908-963-0983" className="text-gray-600 hover:text-amber-400 px-4">
                 908-963-0983
              </a>
              <i>Email:</i>
              <a href="mailto:gil@roessner.net" className="text-gray-600 hover:text-amber-400 px-4">
                gil@roessner.net
              </a>
            </div>
            <div className="text-white">&copy; Roessner & Co.</div>
          </footer>

        </main>
      </div>
  );

  //
  // <div className="h-screen overflow-y-scroll">
  //   {/* Hero Section */}
  //   <div className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(hero-image.webp)' }}>
  //     <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
  //       <h1 className="text-3xl leading-tight font-bold">Roessner & Co.</h1>
  //       <p className="text-lg">The source for outstanding graphic design.</p>
  //     </div>
  //   </div>
  //
  //   {/* Sections */}
      //   {sections.map((section, index) => (
      //       <div key={index} id={section.name} className="py-12 bg-white">
      //         <h2 className="text-2xl leading-tight font-bold">{section.name}</h2>
      //         <div className="flex flex-wrap -mx-4">
      //           {section.images.map((image, index) => (
      //               <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
      //                 <img
      //                     src={image}
      //                     alt={section.name}
      //                     className="w-full h-full object-cover object-center cursor-pointer"
      //                     onClick={() => handleImageClick(image)}
      //                 />
      //               </div>
      //           ))}
      //         </div>
      //       </div>
      //   ))}
      //
      //   {/* Scrolling Gallery */}
      //   <div className="py-12 bg-white">
      //     <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
      //       <div className="flex flex-nowrap overflow-x-scroll">
      //         {sections.map((section, index) => (
      //             <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
      //               <img
      //                   src={section.images[0]}
      //                   alt={section.name}
      //                   className="w-full h-full object-cover object-center cursor-pointer"
      //                   onClick={() => handleSectionClick(section.name)}
      //               />
      //             </div>
      //         ))}
      //       </div>
      //     </div>
      //   </div>
      //
      //   {/* Slider Widget */}
      //   <div className="py-12 bg-white">
      //     <div className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20">
      //       <div className="flex justify-between">
      //         <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
      //           <svg
      //               className="w-4 h-4"
      //               fill="none"
      //               stroke="currentColor"
      //               viewBox="0 0 24 24"
      //               xmlns="http://www.w3.org/2000/svg"
      //           >
      //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      //           </svg>
      //         </button>
      //         <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
      //           <svg
      //               className="w-4 h-4"
      //               fill="none"
      //               stroke="currentColor"
      //               viewBox="0 0 24 24"
      //               xmlns="http://www.w3.org/2000/svg"
      //           >
      //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      //           </svg>
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      //
      //   {/* Fullscreen Image */}
      //   {isFullScreen && (
      //       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
      //         <img
      //             src={selectedImage}
      //             alt="Fullscreen Image"
      //             className="w-full h-full object-cover object-center cursor-pointer"
      //             onClick={handleFullScreenClick}
      //         />
      //       </div>
      //   )}
      //
      // </div>
}
