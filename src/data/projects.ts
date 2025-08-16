import {Project} from "@/types/Project"

interface ProjectIndex  {
  [key: string] : Project
}

export const projects_map:ProjectIndex = {
  "1" : {
    id:"1",
    title:"Sho.com",
    slug:"sho.com",
    description:"Full redesign of Showtime's marketing site, leveraging a Design System and reusable component library to support the build.",
    links: {
      git: "https://github.com/pengbits/sho-www",
      primary: "https://github.com/pengbits/sho-www",
      local: "/projects/1/sho.com"
    }
  },
  "2" : {
    id:"2",
    title:"Sho.com Styleguide",
    slug:"sho.com-styleguide",
    description:"The internal styleguide site and developer-facing documentation for the sho.com Design System.",
    links: {
      git: "https://github.com/pengbits/sho-styleguide",
      live: "https://sho-styleguide.vercel.app/",
      primary: "https://sho-styleguide.vercel.app/",
      local: "/projects/2/sho.com-styleguide"
    }
  },
  "3" : {
    id:"3",
    title:"Paige",
    slug:"paige-cms",
    description:"A React client for a CMS with features such as composable form UI, date preview, rich-text-editor, filters, themes, and search.",
    links: {
      git: "https://github.com/pengbits/sho-paige",
      primary: "https://github.com/pengbits/sho-paige"
    }
  },
  "4" : {
    id:"4",
    title:"Otto",
    slug:"otto",
    description:"A data warehouse built in AWS, facilitating a better understanding of customer acquisition through large scale data extraction and analysis.",
    draft:true,
  },
  "5" : {
    id:"5",
    title:"Flatbush Pediatrics",
    slug:"flatbush-pediatrics",
    description:"A clone of the Tribeca Pediatrics Patient Portal with 80% feature parity. A full-stack React app with a Node.js backend, using Shadcn components for ux and Chart.js for data visualizations.",
    links: {
      git:"/fbpeds",
      live: "https://fbpeds.onrender.com/",
      primary: "https://fbpeds.onrender.com/"
    }
  },
  "6" : {
    id:"6",
    title:"Park.me",
    slug:"park.me",
    description:"A copy of the NYC parking app, using publicly-available meter data to populate a collection of REST APIs for the geospatial layer, which are consumed by a React client with a Google Maps integration. In-progress).",
},
  "7" : {
    id:"7",
    title:"Asbo",
    slug:"asbo",
    description:"An aggregator of a few London-based internet radio stations, built with a React/Redux frontend and a Ruby on Rails server layer. Uses nokigiri for scraping html content from multiple sources on the web, which are parsed and coerced into model collections with a unified shape.",
    links:{
      git: "https://github.com/pengbits/asbo",
      primary:"https://github.com/pengbits/asbo"
    }
  }
}
export const projects_list = Object.values(projects_map)
export const projects_list_published = projects_list.filter(p => !p.draft)
export default projects_list_published