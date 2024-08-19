import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.scss";
import { cn } from "@/shared/lib";
import { ReactNode } from "react";
import { AppContainer } from "@/processes/app-container";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NS",
  description: "Онлайн магазин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={cn("min-h-screen flex flex-col bg-background font-sans antialiased", fontSans.variable)}>
        <AppContainer>
          {children}
        </AppContainer>
      </body>
    </html>
  );
}
