import {Project} from "@/types/Project"

interface ProjectIndex  {
  [key: string] : Project
}

export const projects_map:ProjectIndex = {
  "1" : {
    id:"1",
    title:"Sho.com",
    slug:"sho.com",
    description:"Full redesign of sho.com, the marketing site for Showtime, a premium cable channel with 4M monthly visitors at its peak. I led the development of a Design System with a library of 100+ reusable components to support the build.",
    priority: 550,
		primaryLink: 'local',
    image: "/sho.com/home_00_512x384.jpg",
    links: {
      git: "https://github.com/pengbits/sho-www",
      local: "/projects/1/sho.com"
    }
  },
  "2" : {
    id:"2",
    title:"Sho.com Styleguide",
    slug:"sho.com-styleguide",
    description:"The internal site for cataloging and documenting  Showtime's Design System, featuring everything from foundations/primitives to complex components.",
    priority: 500,
		primaryLink: 'local',
    image: "/styleguide/styleguide_00_512x384.jpg",
    links: {
      git: "https://github.com/pengbits/sho-styleguide",
      live: "https://sho-styleguide.vercel.app/",
      local: "/projects/2/sho.com-styleguide"
    }
  },
  "3" : {
    id:"3",
    title:"Paige",
    slug:"paige-cms",
    description:"A React client for a headless CMS with features such as composable form UI, date preview, rich-text-editor, filters, themes, and search. Heavily informed by principles of Test-Driven and Behavioral-Driven Development.",
    priority: 450,
		primaryLink: 'local',
    image: "/paige-cms/paige_00_512x384.jpg",
    links: {
      git: "https://github.com/pengbits/sho-paige",
      local: "/projects/3/paige-cms"
    }
  },
  "4" : {
    id:"4",
    title:"Otto",
    slug:"otto",
    description:"A data warehouse built in AWS, facilitating a better understanding of customer acquisition through large scale data extraction and analysis.",
    draft:true,
    priority: 450,
		primaryLink: 'git',
    links: {
      local: "/projects/4/otto"
    }
  },
  "5" : {
    id:"5",
    title:"Flatbush Pediatrics",
    slug:"flatbush-pediatrics",
    description:"A clone of the Tribeca Pediatrics Patient Portal with 80% feature parity. I built the view in React using Shadcn and Chart.js for the ux and Zustand for state. For the backend, I scraped patient data, loaded it into an original schema, and served it with Node.js/Express services.",
    priority: 400,
		primaryLink: 'local',
    image: "/fbpeds/fbpeds_01_512x384.jpg",
    links: {
      git:"https://github.com/pengbits/fbpeds",
      live: "https://fbpeds.onrender.com/",
      local: "/projects/5/flatbush-pediatrics"
    }
  },
  "6" : {
    id:"6",
    title:"Park.me",
    slug:"park.me",
    description:"A copy of the NYC parking app, using publicly-available meter data to populate a collection of REST APIs for the geospatial layer, which are consumed by a React client with a Google Maps integration. (In-progress).",
    priority: 350,
		primaryLink: 'local',
    image: "/park.me/00_512x384.jpg",
    links: {
      git: "https://github.com/pengbits/park.me",
      local: "/projects/6/park.me"
    }
  },
  "7" : {
    id:"7",
    title:"Asbo",
    slug:"asbo",
    image: "/asbo/asbo_00_512x384.png",
    description:"An aggregator of a few internet radio stations that I was a fan of, but which lacked RSS feeds for their mix shows. It has a React/Redux frontend, Ruby on Rails backend, and uses Nokigiri for scraping and parsing html content to populate the models.",
    priority: 300,
		primaryLink: 'local',
    links:{
      git: "https://github.com/pengbits/asbo",
      local: "/projects/7/asbo"
    }
  },
  "8" : {
    id: "8",
    title: "The Dudes EP",
    slug: "the-dudes-ep",
    image: "/the-dudes-ep/00-generic-front_512x384.jpg",
    description: "Limited-edition packaging design for a vinyl-only release in which each sleeve was uniquely distressed, altered and customized, resulting in 150 one-of-a-kind collectable products.",
    priority: 175,
		primaryLink: 'local',
    links: {
      flickr: "https://www.flickr.com/photos/thedudesep/",
      local: "/projects/8/the-dudes-ep",
      discogs: "https://www.discogs.com/release/485379-Various-The-Dudes-EP"
    }
  },
   "9" : {
    id: "9",
    title: "Brooklyn Anthem",
    slug: "brookyn-anthem-team-shadetek-feat-77-klash-and-jahdan",
    image: "/brooklyn-anthem/01-front_512x384.jpg",
    description: "Packaging design, art direction and photography for a crucial release on Sound-Ink records. Arguably the first Grime track produced and vocaled in the US, I was there to capture the moment in visual form.",
    priority: 150,
		primaryLink: 'local',
    links: {
      local: "/projects/9/brookyn-anthem-team-shadetek-feat-77-klash-and-jahdan",
      discogs: "https://www.discogs.com/release/898523-Team-Shadetek-Brooklyn-Anthem"
    }
  }
}
export const projects_list = Object.values(projects_map)
export const projects_list_published = projects_list.filter(p => !p.draft)
export const projects_list_min_priority = ((priority:number) => projects_list_published.filter(p => p.priority >= priority))
export const projects_list_below_priority = ((priority:number) => projects_list_published.filter(p => p.priority < priority))
export default projects_list_published