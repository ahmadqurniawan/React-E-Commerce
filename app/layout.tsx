// app/layout.tsx
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/component/navbar/navbar";
import Footer from "@/component/footer";
import Providers from "./providers";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "E-Commerce Website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        <Providers>
          <Navbar />
          <main className="bg-gray-50 min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
