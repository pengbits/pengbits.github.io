import { Company } from "@/types/Work"

const work_history:Company[] = [{
  name:"Freelance",
  location:"New York, NY",
  roles: [{
    title: "Senior Full-Stack Engineer",
    startDate:"01/2024",
    endDate:"Current",
    achievements: [
      "Developing a copy of the NYC parking app, using publicly-available meter data to populate a collection of REST APIs for the geospatial layer, which are consumed by a React client with a Google Maps integration. (In-progress).",
      "Built a clone of Tribeca Pediatrics' patient portal with 80% feature parity, designing and deploying REST APIs and developing a custom, mobile-optimized user experience using Shadcn components and Chart.js for data visualizations."
    ]
  }],
},{
  name: "Showtime Networks",
  location:"New York, NY",
  roles: [{
    title: "Director, Front-end Development",
    startDate:"11/2012",
    endDate:"09/2023",
    achievements: [
      "Collaborated with Product, Design, and Engineering teams to build new features, publishing tools and web applications for Showtime's marketing site, which had 4M monthly unique visitors at its peak.",
      "Championed the use of design systems, implementing a library of 100+ reusable components, resulting in 2x faster development times and a responsive, visually appealing UI.",
      "Developed a React client for a CMS with features such as composable form UI, date preview, rich-text-editor, filters, themes, and support for 500+ promotions, 50+ campaigns, and 20+ form types. Worked closely with Backend team to integrate RESTful APIs.",
      "Contributed code, wrote unit tests, and deployed services for Otto, a data warehouse built in AWS, facilitating a better understanding of customer acquisition through large scale data extraction and analysis.",
      "Introduced Test-Driven-Development to the Frontend Team, improving code quality. Migrated build tools from Gulp to Webpack, modernizing the release workflow and reducing asset size and compilation times by 25%.",
      "Manager to junior engineers, providing mentorship, setting coding standards and performing code reviews, increasing code quality and productivity by 20%."
    ]
  },{
    title: "Senior Front-end Developer",
    startDate:"09/2009",
    endDate:"11/2012",
    achievements: [
      "Served as Full-Stack developer, creating, iterating on and shipping a Rails CMS that integrated with the legacy Java stack, introducing modern features to existing tools and extending backend team coverage by 25%.",
      "Developed a custom, overlay/modal-style video player backed by the Brightcove Player API, leading to a superior user experience and a 17% lift in video views."
    ]
  },{
    title: "Frontend Developer",
    startDate:"01/2007",
    endDate:"08/2009",
    achievements:[
      "Collaborated with cross-functional teams to build and maintain customer-facing websites, supporting Showtime's original programming, movies and sports.",
      "Analyzed processes and workflows, introduced Rails-style scaffolding tools for the command-line, improving the developer experience."
    ]
  }, {
    "title" : "Junior Designer",
    startDate: "10/2006",
    endDate: "12/2006",
    achievements:[
      "Designed and produced banners, animations and other visual assets"
    ]
  }]
},{
  name: "Freelance",
  location:"New York, NY",
  roles: [{
    title:"Web Developer, Web and Print Designer",
    startDate: "01/2003",
    endDate: "08/2005",
    achievements: [
      "Designed and built websites, e-commerce platforms and content management systems for a diverse clientele, including: musicians, artists, photographers, fashion designers, sign shops, art galleries and record labels.",
      "Art-directed, designed and performed pre-production on Vinyl/CD packaging for Change Agent, Sound-iNK, WhateverWeWant, and Warp record labels."
    ]
  }]
}]
export default work_history