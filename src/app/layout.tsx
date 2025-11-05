
import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { Box, Container } from "@chakra-ui/react"
import Nav from "@/components/nav";
import { Footer } from "@/components/Footer";
import { InnerContainer } from "@/components/InnerContainer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dave Paul - Senior Full-Stack Engineer ",
  description: "Senior Full-Stack Engineer | Crafting consistent, delightful, and impactful web experiences | React/TypeScript/Node.js/Design Systems"
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
            // border='purple solid 2px'
            >
            <Container maxWidth="100%" px="0" pb="40">
              <InnerContainer>
                {children}
              </InnerContainer>
            </Container>
            <Container maxWidth="100%" px="0" color="gray.100" bgColor="gray.950">
              <InnerContainer>
                <Footer />
              </InnerContainer>
            </Container>
          </Box>
        </Provider>
      </body>
    </html>
  );
}
