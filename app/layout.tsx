import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "James Maynard Poetry",
  description: "A poetry website for James Maynard, featuring his works and updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
