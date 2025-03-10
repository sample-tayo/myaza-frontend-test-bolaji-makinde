import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/features/layout";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uifry - Empower Your Financial Journey",
  description:
    "Step into the future of finance with Uifry, where your money's potential is unlocked. Effortlessly send, receive, and exchange currencies while managing a world of financial possibilities.",
  keywords: [
    "financial journey",
    "send money",
    "receive funds",
    "currency exchange",
    "multi-currency management",
    "digital wallet",
    "virtual card",
    "financial freedom",
    "Uifry",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${karla.variable} min-h-screen antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
