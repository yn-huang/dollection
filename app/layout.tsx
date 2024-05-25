import type { Metadata } from "next";
import { ThemeProvider } from "@/theme";

export const metadata: Metadata = {
  title: "Dollection",
  description: "BJD Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
