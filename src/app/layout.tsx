import type { Metadata } from "next";
import { MobileProvider } from "./context/MobileViewContext";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Quan Nguyen - Introduction",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body suppressHydrationWarning>
        <MobileProvider>{children}</MobileProvider>
      </body>
    </html>
  );
}
