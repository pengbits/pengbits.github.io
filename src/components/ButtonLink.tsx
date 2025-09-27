import { ReactNode } from "react"
import { Button } from "@chakra-ui/react"
import { targetForPath } from "@/lib/links";

type ButtonProps = {
  target?: string,
  href: string,
  children: ReactNode
}

export const ButtonLink = ({href, children}:ButtonProps) => {
  return (
    <Button size="xs" variant="subtle">
      <a target={targetForPath(href)} href={href}>{children}</a>
    </Button>)
}