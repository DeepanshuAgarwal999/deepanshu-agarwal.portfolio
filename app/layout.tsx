import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepanshu Agarwal | Full Stack Developer",
  description:
    "Full Stack Developer with 1.6 years of experience building scalable products with React, Next.js, Node.js, NestJS and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
