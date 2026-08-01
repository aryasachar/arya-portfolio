import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AskArya } from "@/components/ask-arya";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arya Sachar — Product Manager, AI & Data",
  description:
    "Arya Sachar is a Product Manager at Yahoo building data and AI tools, from Yahoo Scout to agentic experiment workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col antialiased">
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
          <AskArya />
        </ThemeProvider>
      </body>
    </html>
  );
}
