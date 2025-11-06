import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["8"]

const data:ProjectDetails = {
  ...meta,
  images: [{
    src:   "/the-dudes-ep/00-generic-front_592x600.jpg",
    aspectRatio: "square"
  },{
    src:   "/the-dudes-ep/02-process-600x450.jpg",
    aspectRatio: "landscape"
  // },{
  //   src:   "/the-dudes-ep/03-process-600x450.jpg",
  //   aspectRatio: "landscape"
  },{
  //   src:   "/the-dudes-ep/04-process-600x450.jpg",
  //   aspectRatio: "landscape"
  // },{
    src:   "/the-dudes-ep/05-process-600x450.jpg",
    aspectRatio: "landscape"
  // },{
  //   src:   "/the-dudes-ep/06-process-600x450.jpg",
  //   aspectRatio: "landscape"
  // },{
  //   src:   "/the-dudes-ep/07-process-600x450.jpg",
  //   aspectRatio: "landscape"
  // },{
  //   src:   "/the-dudes-ep/08-process-600x450.jpg",
  //   aspectRatio: "landscape"
  },{
    src:   "/the-dudes-ep/09-process-600x450.jpg",
    aspectRatio: "landscape"
  // },{
  //   src:   "/the-dudes-ep/10-process-600x450.jpg",
  //   aspectRatio: "landscape"
  }],
  highlights: [
    "Art direction, design, and production for a pivotal release on Shadetek Records.",
    "Each record sleeve was uniquely distressed, altered and customized, resulting in 150 one-of-a-kind collectable products.",
    "Created an original font, utilized screenprinting and mixed media, and unique analog techniques to introduce glitches and variations in the end product."
  ],
  body:[
    `[https://www.discogs.com/artist/63564-Team-Shadetek](Team Shadetek) are a pair of electronic and hip-hop music producers that had an independent label in the early to mid 2000s, releasing their own productions as well as some truly innovative tunes by other beatmakers, originally as part of the IDM scene, but later expanding into Grime, Dancehall and Hip-Hop and working with vocalists. I was part of an artists' collective with them, along with the street artist [https://swoonstudio.org/about](Swoon). They wanted me to design a sleeve for a vinyl-only release.`,
    
    `At the time, Team Shadetek were interested in pushing the boundaries of vinyl packaging design by making limited numbers of uniquely distressed sleeves that could be treated as collectibles. They had worked with Swoon on an earlier release and she had utilized collage and stickers, pairing them with the brown craft-paper style vinyl sleeves that were an economical option. I wanted to do something similar but put my own spin on it.`,

    `I had some experience with screen-printing and had made a few limited runs of T-shirts that were placed in a speciality store on Grand st. (RIP Zakka!).  I decided to create a custom typeface and use it to lay out the key elements of the design  (the artist names, track titles and release info) in 3-4 different variations - I then produced some screens of the text and printed them in a few different colorways on the hundreds of sleeves that would form the basis of the collection.`,

    `I had also been working with analog fax machines, the kind that used scrolls of thermal paper, as a device for introducing glitches and grunge elements to my design work. I would do things like crumple up the paper, expose it to heat and introduce stalls and staggers by putting my hands on the source material as it passed through the scanner element - almost like the visual equivalent of scratching a record. Team Shadetek were really excited about this technique and I knew that they would be happy if I worked it into the project somehow.`,

    `I had gotten my hands on a roll of stickers from the post office on Canal - and I discovered that I could use them in the same fax machine that I was experimenting with. They were thermal stickers, so they used heat to mark the paper rather than ink - meaning that the cost of printing was nonexistent, included in the media! These stickers had a slight green cast to the ink, which gave the prints a patina, aging them prematurely - and they would age even more in exposure to sunlight. Postal and UPS stickers hold a special place in graffiti history and they are a familiar site to anyone who has spent time in the city. They cover lamp posts and walls, bearing the drippy signatures of the writers who deploy them at scale - and I knew this would add an extra layer of meaning and decay to the sleeves.`,
  
    `Since the Dudes Ep was a compilation release, featuring four different groups across a range of genres, there was a large number of artist portraits for me to work with. I used thermal stickers exclusively for the headshots, and applied the text content with screenprint, which gave the sleeves a layered, mixed-media effect. By introducing variations and glitches in the stickers, creating different text lockups to choose from, and then freestyling the application of these component pieces, I was able to make each sleeve fairly unique. I futher customized them by drawing flourishes and accents in marker.`,

    `I don't know how long the sleeves lasted before the thermal stickers faded beyond recognition, but at least I know the screenprinted and marker elements held up, wherever they are now!`
  ],

  tags:[
    "Records",
    "Packaging",
    "Design",
    "Typography",
    "Screenprint",
    "Street Art",
    "Graffiti",
    "Artists Collective",
    "Team Shadetek"
  ]
}
export default data