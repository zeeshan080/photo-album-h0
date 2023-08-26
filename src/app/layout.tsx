import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/features/header";
import SideNavbar from "./components/features/sidenavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PhotoAlbum",
  description: "Nextjs cloudnairy app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex gap-3 mt-3">
          <SideNavbar className={"w-[20%] border rounded-sm m-3 min-h-screen h-full"} />
          <div className="w-[80%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
