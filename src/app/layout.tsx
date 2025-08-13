import { Provider } from "@/components/ui/provider";
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dave Paul - Senior Frontend Engineer ",
  description: "Senior Frontend Engineer | Crafting consistent, delightful, and impactful web experiences"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
