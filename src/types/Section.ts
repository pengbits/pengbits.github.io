export type Section = {
  title: string,
  titleShort?: string,
  id: string
}

// TODO should not have to redefine chakra's breakpoints like this
export type SectionNavigationProps = {
  sections: Section[],
  display?: {
    'base'?:string,
    'md'?:string,
    'lg'?:string,
    'xl'?:string,
    '2xl'?:string
  }
}
