import "./globals.css";
import type { Metadata } from "next";
import { type_second } from "./functions/fonts";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dogs Next",
  description: "Dogs Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${type_second.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
