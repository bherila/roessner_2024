import type { Metadata, Viewport } from "next";
import "./globals.css";
import Container from "@/components/Container";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Roessner & Co.",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "contain",
  maximumScale: 1,
  userScalable: true,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(openSans.variable, "antialiased", "h-screen", "flex", "flex-col", "font-sans")}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
