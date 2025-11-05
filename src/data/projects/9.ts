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
    "Overcame logistical hurdles (MTA Strike!), managed competing client desires and sourced a location for the shoot to complete the project on time.",
    "Tapped an intimate familiarity with the visual language of hiphop and dancehall releases to craft a new classic sleeve design."
  ],
  body:[
    `tbd`
  ],

  tags:[
    "Records",
    "Packaging",
    "Design",
    "Typography",
    "Screenprint",
    "Photography",
    "Less is More",
    "Grime",
    "Dancehall",
    "77 Klash",
    "Jahdan Blakkamore",
    "Team Shadetek",
    "Sound-Ink"
  ]
}
export default data