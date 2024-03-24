import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { inter } from "@/fonts/fonts";
import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NextAuthSessionProvider from "@/providers/sessionProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  authors: {
    name: "Brent Baylon",
    url: "https://github.com/AnonymouseHucker29",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="antialiased bg-gradient-to-b from-[#FFDBC9] dark:from-black via-[#ffdbc9]/80 via-40% to-[#EADDFF]/40 dark:to-slate-800 to-90%">
              <Navbar />
              {children}
              <Analytics />
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
