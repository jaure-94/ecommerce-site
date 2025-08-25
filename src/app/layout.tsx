import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "@/components";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Nike E-Commerce website clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} antialiased`}
      >
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
