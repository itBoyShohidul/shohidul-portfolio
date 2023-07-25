// import './globals.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["english"] });

export const metadata = {
  title: "itBoyShohidul - Web Developer and SEO Expert Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
