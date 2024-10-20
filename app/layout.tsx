import type { Metadata, Viewport } from "next";
import "./globals.css";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Roessner & Co.",
  description: "",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "contain",
  maximumScale: 1,
  userScalable: false,
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
      <body className="antialiased h-screen flex flex-col">
        <Container>{children}</Container>
      </body>
    </html>
  );
}
