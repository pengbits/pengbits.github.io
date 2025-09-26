import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["5"]

const data:ProjectDetails = {
  ...meta,
  body:[
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet fermentum lectus. Cras eget viverra turpis. Sed tellus risus, vulputate sed tincidunt vitae, scelerisque ut dolor. Donec feugiat enim vitae lorem laoreet tristique. Ut arcu lorem, facilisis at tempus sit amet, vestibulum in enim. Vestibulum porta, sapien eu mollis commodo, sapien dui maximus justo, vitae varius neque erat non nisi. Aliquam ultricies interdum maximus. In hac habitasse platea dictumst. Quisque ligula lectus, elementum in eros ut, malesuada eleifend ligula. Suspendisse condimentum sit amet velit nec placerat. Cras nec odio ligula. Phasellus vitae ultrices arcu. Phasellus sem erat, facilisis et varius quis, ullamcorper vel purus. Cras a felis varius, scelerisque nunc consectetur, placerat dolor. Duis nisl sem, aliquam eu sem ut, volutpat feugiat turpis.",
    "Curabitur pulvinar, nisl varius pulvinar scelerisque, dolor ante pulvinar mauris, at rutrum urna velit vel ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce finibus metus quis erat lobortis, ac porta diam convallis. In feugiat sagittis neque, in feugiat leo cursus et. Suspendisse a lorem ac mi placerat ornare eu vitae libero. Donec pellentesque finibus aliquet. Pellentesque quis justo iaculis, convallis neque sed, scelerisque justo. Donec efficitur neque ac lectus rutrum, quis varius sapien suscipit. Fusce hendrerit nibh ac urna commodo, id faucibus libero viverra. Praesent eu elit turpis. Proin vestibulum dolor id nibh vehicula viverra. Fusce vitae bibendum erat, at aliquam dolor."
  ],
  tags:[
    "React",
    "Shadcn",
    "JavaScript/ES6",
    "CSS3",
    "Mobile-first",
    "Personal"
  ]
}
export default data