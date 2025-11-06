import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["9"]

const data:ProjectDetails = {
  ...meta,
  images: [{
    src:   "/brooklyn-anthem/01-front_600x600.jpg",
    aspectRatio: "square"
  },{
    src:   "/brooklyn-anthem/02-back_600x600.jpg",
    aspectRatio: "square"
  }],
  highlights: [
    "Performed art direction, packaging design, and photography for a crucial release on Sound-Ink Records.",
    "Arguably the first Grime track produced and vocaled in the US, I was there to capture the moment in visual form.",
    "Overcame logistical hurdles ('05 MTA Strike!), managed competing client desires and sourced a last-minute location for the shoot in order to execute the sleeve art on brand and on time.",
    "Leveraged an intimate familiarity with the visual language of hiphop and dancehall releases to craft a new classic sleeve design."
  ],
  body:[
    `tbd`
  ],

  tags:[
    "Records",
    "Packaging",
    "Design",
    "Typography",
    "Photography",
    "NYC",
    "Grime",
    "Dancehall",
    "77 Klash",
    "Jahdan Blakkamore",
    "Team Shadetek",
    "Sound-Ink"
  ]
}
export default data