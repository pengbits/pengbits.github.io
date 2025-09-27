export const targetForPath = (href:string) => (
  href.indexOf('/') == 0 ? "_self":"_blank"
)