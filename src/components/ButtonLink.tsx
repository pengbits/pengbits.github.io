import { ReactNode } from "react"
import { Button } from "@chakra-ui/react"
type ButtonProps = {
  target?: string,
  href: string,
  children: ReactNode
}

export const ButtonLink = ({href, children}:ButtonProps) => {
  return (
    <Button size="xs" variant="subtle">
      <a target={href.indexOf('/') == 0 ? "_self":"_blank"} href={href}>{children}</a>
    </Button>)
}