import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["6"]

// https://data.cityofnewyork.us/Transportation/Parking-Meters-Locations-and-Status/693u-uax6/about_data
const data:ProjectDetails = {
  ...meta,
    highlights: [
    `A clone of the NYC parking app, reimagined as a React SPA backed by REST APIS.`, 
    `Designed a new database schema and seeded it with publicly-available meter data to support the geo-spatial layer.`,
    `Implemented k-means clustering algorithm to group meters visually and wrap them in a Google Maps component.`
  ],
  body:[
    `Another fun personal project - I found myself looking at the NYC parking meter app constantly and wondering what it would take to build a working version. I realized that the data representing all the parking meters in New York City, including their geographic locations (lat/long coords) was publicly available as part of the OpenData project. Once I got my hands on that, it was just a matter of setting up the database and seeding it with meter data. From there I was able to build REST endpoints in a Node.js environment, utilizing TypeScript for end-to-end type-safety, and start sketching the Google Maps implementation in the client. The map view was the heaviest lift, but I also had to add models and handling around creating and extending (parking) sessions and managing the user's cars.`, 
    `One of my favorite parts of this project was learning about the k-means clustering algorithm, which I had to implement in order to gather the different meters into groups, depending on the user's zoom settings and location.`,
    `This project is still in-progress.`
  ],
    images: [{
    base: "/park.me/00_390x780.png",
    md:   "/park.me/00_1024x768.png"
  },{
    base: "/park.me/01_390x780.png",
    md:   "/park.me/01_1024x768.png"
  },{
    base: "/park.me/02_390x780.png",
    md:   "/park.me/02_1024x768.png"
  },{
    base: "/park.me/03_390x780.png",
    md:   "/park.me/03_1024x768.png"
  }],
  tags:[
    "React",
    "Express",
    "Node.js",
    "Google Maps",
    "JavaScript/ES6",
    "TypeScript",
    "OpenData"
  ]
}
export default data