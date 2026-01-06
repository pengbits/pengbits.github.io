import { Company } from "@/types/Work"

const work_history:Company[] = [{
  name:"Freelance",
  location:"New York, NY",
  roles: [{
    title: "Senior Full-Stack Engineer",
    startDate:"01/2024",
    endDate:"Current",
    achievements: [
      "Developing a parking app that leverages the Google Maps API to display available meter spots.",
      "Created a GraphQL api to house thanks and shout-outs as part of a larger multiformat xmas card release.",
      "Built a patient portal using Shadcn for the frontend, Chart.js for data visualizations, and a Node.js/Express backend.",
      "Completed modules on Tailwind, GraphQL API integration and Advanced React on FrontendMasters.com.",
      "Completed Full-Stack Development Path on Codecademy.com."
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
      "Championed the use of Design Systems, built a library of 100+ reusable components, accelerating dev time by 2x.",
      "Led frontend development of a full-redesign of Showtime’s marketing site with 4M monthly unique visitors.",
      "Partnered with Product to identify features for an MVP, architected a new CMS to power the site, eliminating the need for engineering resources to make content updates and crafting a best-in-class publishing tool from scratch.",
      "Contributed code, wrote unit tests, and deployed services for Otto, a cloud-native data warehouse built in AWS, facilitating a better understanding of customer acquisition through large scale data extraction and analysis.",
      "Introduced TDD to the frontend team, reducing regression bugs by ~30% and noticeably improving code quality.",
      "Migrated build tools from Gulp to Webpack, modernizing the release workflow, reducing asset size by ~35%, and improving compilation times by ~20%.",
      "Managed 2–3 engineers, mentoring, defining coding standards, and reviewing code; reduced PR revisions by ~25% and helped the team ship features ~15% faster.",
    ]
  },{
    title: "Senior Front-end Developer",
    startDate:"09/2009",
    endDate:"11/2012",
    achievements: [
      "Served as Full-Stack developer, creating, iterating on and shipping a Rails CMS that integrated with the legacy Java stack, introducing modern features to existing tools and extending backend team coverage by 25%.",
      "Frontend Architect of Red Rewards, a suite of features that leveraged a third-party API to bring a gamification layer to the marketing site. Users were incentivized to consume and share content in order to appear in leaderboards and gain access to virtual achievements.",
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