import { Section } from "@/types/Section";

export const Sections:Section[] = [{
  title: "Projects",
  id: "projects"
},{
  title: "Skills",
  id: "skills"
},{
  title: "Work Experience",
  titleShort: "Work",
  id: "work"
},{
  title:"Contact",
  titleShort: "Contact",
  id: "contact"
}]
export const sectionIdFromTitle = (title:string):string | undefined => {
  const s = Sections.find(entry => entry.title === title)
  return s?.id
}
export default Sections