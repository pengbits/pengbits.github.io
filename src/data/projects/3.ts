import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:any = projects_map["3"]

const data:ProjectDetails = {
  ...meta,
  body:[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet fermentum lectus. Cras eget viverra turpis. Sed tellus risus, vulputate sed tincidunt vitae, scelerisque ut dolor. Donec feugiat enim vitae lorem laoreet tristique. Ut arcu lorem, facilisis at tempus sit amet, vestibulum in enim. Vestibulum porta, sapien eu mollis commodo, sapien dui maximus justo, vitae varius neque erat non nisi.",
    "Aliquam ultricies interdum maximus. In hac habitasse platea dictumst. Quisque ligula lectus, elementum in eros ut, malesuada eleifend ligula. Suspendisse condimentum sit amet velit nec placerat. Cras nec odio ligula. Phasellus vitae ultrices arcu. Phasellus sem erat, facilisis et varius quis, ullamcorper vel purus. Cras a felis varius, scelerisque nunc consectetur, placerat dolor. Duis nisl sem, aliquam eu sem ut, volutpat feugiat turpis."
  ],
  tags:[
    "CMS",
    "React",
    "Redux",
    "RESTful APIs",
    "JavaScript/ES6",
    "Tools",
    "Showtime"
  ]
}
export default data