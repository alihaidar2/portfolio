import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

/**
 * Global page metadata.
 */
export const metadata: Metadata = {
  title: "Ali Haidar",
  description: "Ali Haidar's portfolio web app",
};

/**
 * Root layout for the entire site:
 * - Sticky navbar at top
 * - Sticky footer at bottom
 * - main content expands to fill remaining space
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto p-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
