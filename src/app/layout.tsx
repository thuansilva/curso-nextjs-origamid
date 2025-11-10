import type { Metadata } from "next";
import { type_second } from "./functions/fonts";

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
      <body className={`${type_second.variable} antialiased`}>{children}</body>
    </html>
  );
}
