import "../styles/globals.css";
import type { Metadata } from "next";
import type { Viewport } from "next";
import { inter } from "@/fonts/fonts";
import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NextAuthSessionProvider from "@/providers/sessionProvider";

export const metadata: Metadata = {
  title: "SpotiFirst",
  description: "Identify your first and favorite artists on Spotify.",
  applicationName: "SpotiFirst",
  icons: "https://simpleicons.org/icons/spotify.svg",
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
            <main className="antialiased bg-gradient-to-r from-indigo-900 dark:from-black via-purple-500 via-40% to-slate-400 dark:to-slate-800 to-90%">
              <Navbar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
