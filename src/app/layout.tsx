
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react"
import { Nav } from "@/components/Nav";
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
        <Provider>
          <Nav />
          <Box as="main" mt="20"
            border='purple solid 2px'>
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
