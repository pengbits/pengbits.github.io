import {Project} from "@/types/Project"

interface ProjectIndex  {
  [key: string] : Project
}

export const projects_map:ProjectIndex = {
  "1" : {
    id:"1",
    title:"Sho.com",
    slug:"sho.com",
    description:"Full redesign of sho.com, the marketing site for Showtime, a premium cable channel with 4M monthly visitors at its peak. I lead the development of a Design System with a library of 100+ reusable components to support the build.",
    primaryLink: 'git',
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
    primaryLink: 'live',
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
    primaryLink: 'git',
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
    primaryLink: 'live',
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
    description:"A copy of the NYC parking app, using publicly-available meter data to populate a collection of REST APIs for the geospatial layer, which are consumed by a React client with a Google Maps integration. In-progress).",
    primaryLink: 'git',
    links: {
      git: "https://github.com/pengbits/park.me"
    }
  },
  "7" : {
    id:"7",
    title:"Asbo",
    slug:"asbo",
    description:"An aggregator of a few internet radio stations that I was a fan of, but which lacked RSS feeds for their mix shows. It has a React/Redux frontend, Ruby on Rails backend, and uses nokigiri for scraping and parsing html content to convert into model collections.",
    primaryLink: 'git',
    links:{
      git: "https://github.com/pengbits/asbo",
    }
  }
}
export const projects_list = Object.values(projects_map)
export const projects_list_published = projects_list.filter(p => !p.draft)
export default projects_list_published