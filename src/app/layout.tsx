import type { Metadata } from "next";
import { Fjord_One } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./bootstrap_overwrite.css";
import "bootstrap/dist/css/bootstrap.min.css";

const fjord_One = Fjord_One({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Welcome to Ikigai",
  description: "React/Next sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={fjord_One.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}