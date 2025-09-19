import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:any = projects_map["1"]

const data:ProjectDetails = {
  ...meta,
  body:[
    `Sho.com was the marketing site for Showtime, a premium cable channel, which had 4M monthly unique visitors at it's peak. 
    
    While not a streaming destination like Hulu or Netflix, we represented a premium channel, so the bar was quite high for the site's design, interactions and performance.

    In the last iteration of the site, I pitched the use of a Design System and a reusable component library to support the build, allowing us to build features 2-3x faster than with a conventional page-based approach. This meant we could scale the site to support numerous devices/screen sizes while enforcing consistency and delivering an impactful, high-quality user experience.`
  ,  
   `The use of a Design System dramatically improved cross-functional collaboration with the Design and Product teams, as we gained a common language for discussing new and existing functionality, and it freed up a lot of dev and design cycles as we didn't need to reinvent the wheel every time we wanted to support a new series or implement a new feature.`
  
  
  ],
  video:{
    title: 'Sho.com Homepage',
    desktop:  "https://www.loom.com/embed/e6e722d28216472581dfd864b28414e3?sid=da6063f8-9303-4823-9696-694c6de55cc6",
    mobile:   "https://www.loom.com/embed/d461abaac8414ca9a8525312397a44cd?sid=ca855c94-839a-4cfd-970f-c4a5f12d2fbe" 
  },
  tags:[
    "Design System",
    "Component Library",
    "JavaScript/ES6",
    "CSS3",
    "Showtime"
  ],
  relatedProjects: [
    '2'
  ]
}
export default data