import React from "react";
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="block bg-cover bg-center bg-no-repeat bg-black">
      {/*<main className="container mx-auto p-4 pt-6 md:p-6 lg:px-16 xl:px-20 h-screen">*/}
      {children}
      {/*</main>*/}
    </div>
  );
}
