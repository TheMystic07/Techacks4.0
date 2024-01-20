import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code-HeXa",
  description: "by WuChang Clan teri bhen ko de",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
