import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Providers/theme-provider";
import { StoreProvider } from "@/components/Providers/StoreProvider";
import { Toaster } from "@/components/ui/sonner";
import MainLayoutProvider from "@/components/Providers/MainLayoutProvider";
import QueryProvider from "@/components/Providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helix Exchange",
  description: "Platform for trading digital assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <StoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem={false}
              forcedTheme="dark"
              disableTransitionOnChange
              storageKey="helix-theme"
            >
              <main>
                <MainLayoutProvider>{children}</MainLayoutProvider>
              </main>
              <Toaster />
            </ThemeProvider>
          </StoreProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
