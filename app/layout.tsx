import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xora | SaaS Landing Page",
  description: "Create by @Denny_Age",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}  antialiased text-white bg-black`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
