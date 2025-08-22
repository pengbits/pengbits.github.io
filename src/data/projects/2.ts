import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:any = projects_map["2"]

const data:ProjectDetails = {
  ...meta,
  body:[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet fermentum lectus. Cras eget viverra turpis. Sed tellus risus, vulputate sed tincidunt vitae, scelerisque ut dolor. Donec feugiat enim vitae lorem laoreet tristique. Ut arcu lorem, facilisis at tempus sit amet, vestibulum in enim. Vestibulum porta, sapien eu mollis commodo, sapien dui maximus justo, vitae varius neque erat non nisi.",
    "Aliquam ultricies interdum maximus. In hac habitasse platea dictumst. Quisque ligula lectus, elementum in eros ut, malesuada eleifend ligula. Suspendisse condimentum sit amet velit nec placerat. Cras nec odio ligula. Phasellus vitae ultrices arcu. Phasellus sem erat, facilisis et varius quis, ullamcorper vel purus. Cras a felis varius, scelerisque nunc consectetur, placerat dolor. Duis nisl sem, aliquam eu sem ut, volutpat feugiat turpis."
  ],
  video: {
    title: 'Sho.com Styleguide',
    desktop: "https://www.loom.com/embed/c6f9653ccb41419f8bdeaa34d2413307?sid=f06933d3-ed6e-4393-907e-e50bad12c45a",
    mobile: "https://www.loom.com/embed/d97ee66b51354bd59c6beb01f1a69170?sid=719be9a7-e668-46c3-9c20-a0f5fd643343"
  },
  tags:[
    "Design System",
    "Component Library",
    "JavaScript/ES6",
    "CSS3",
    "Metalsmith",
    "Showtime"
  ]
}
export default data
