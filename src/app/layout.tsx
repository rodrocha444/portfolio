import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { twJoin } from "tailwind-merge";
import "./globals.css";

const jetbrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F. Rodrigo Rocha",
  description: "Meu portfólio pessoal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twJoin(jetbrains.className, "bg-black text-white")}>
        {children}
      </body>
    </html>
  );
}
