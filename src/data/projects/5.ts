import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["5"]

const data:ProjectDetails = {
  ...meta,
  highlights: [
    `A clone of Tribeca Pediatrics' patient portal with 80% feature parity, reimagined as a responsive, playful, single-page-app.`, 
    `Designed a new database schema and backend, populated with scraped patient data.`,
    `Implemented REST APIs in Node.js and an Authentication/Signup Flow with Passport.`,
    `Built a mobile-optimized ux with React and Shadcn, Zustand for state management and Chart.js for data visualizations.`
  ],
  body:[
    "I was looking for a good sandbox project to flex my full-stack muscles on, and I came across the Tribeca Pediatrics patient portal. I wanted to reimagine the user experience as something more whimiscal, less fussy, but with all of the core functionality intact. I was attracted to the challenge of modeling the patient data and capturing the relationships, and utilizing Chart.js to render the growth charts accurately. I sourced the data from my own kids' records, scraping the output of Tribeca's growth chart services, and using it to populate the database. I also pulled some content on a few of the healthcare providers in order to flesh out their profile pages. ",
    "I sourced some of the components from the Shadcn ui framework, which gave them a bit of extra polish. The rest of the design was a mashup of pediatric-themed sketches from dribbble."
  ],
  images: [{
    base: "/fbpeds/fbpeds-01-login_390x780.jpg",
    md:   "/fbpeds/fbpeds-01-login_1024x768.jpg"
  },{
    base: "/fbpeds/fbpeds-01-listing_390x780.jpg",
    md:   "/fbpeds/fbpeds-01-listing_1024x768.jpg"
  },{
    base: "/fbpeds/fbpeds-02-create-appt_390x780.jpg",
    md:   "/fbpeds/fbpeds-02-create-appt_1024x768.jpg"
  },{
    base: "/fbpeds/fbpeds-03-chart_390x780.jpg",
    md:   "/fbpeds/fbpeds_01_1024x768.jpg"
  }],
  tags:[
    "React",
    "Zustand",
    "Shadcn",
    "Chart.js",
    "JavaScript/ES6",
    "CSS3",
    "Mobile-first",
  ]
}
export default data