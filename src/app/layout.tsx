import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atlas MVP",
  description: "Interactive world events knowledge product prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
