import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.scss";
import { cn } from "@/shared/lib";
import { ReactNode } from "react";
import { AppContainer } from "@/processes/app-container";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NS",
  description: "NS - инновационный казахстанский бренд номер один. Бытовая техника для красоты. Бритвы, триммеры, станки, насадки для бритв. Фены, фены-стайлеры, выпрямители.",
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
        <Script>
          {`  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98204484, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true,
        ecommerce:"dataLayer"
   });`}
        </Script>
        <noscript><div><img src="https://mc.yandex.ru/watch/98204484" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
        <AppContainer>
          {children}
        </AppContainer>
      </body>
    </html>
  );
}
