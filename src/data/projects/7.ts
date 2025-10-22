import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["7"]

const data:ProjectDetails = {
  ...meta,
  images: [{
    base: "/asbo/asbo_00_512x384.png",
    md:   "/asbo/asbo_00_1024x768.png"
  }],
  highlights: [
    `An aggregator providing a curated feed of dj mix show content across different stations.`,
    `React & Redux for the Client, Ruby on Rails for the server.`,
    `Heavily influenced by principles of Test-Driven and Behavior-Driven development, using Jest and Cucumber.`,
    `Renegade HTML scraping powered by Nokogiri!`
  ],
  body:[
    "Asbo was a personal project that started in the best possible way: in response to a real problem that I was experiencing at the time. I have been a fan of electronic and underground club music for years, following the scenes as they mutated and spawned new genres, and I was always dialed in to what was happening in the UK. At the time, I was listening to a lot of dj mix shows, and paying close attention to several pirate/internet radio stations based in London. I noticed that a lot of the same djs that I followed would pop up on several different stations. At the same time, some of the stations were pushing out a large nunber of shows, but I was only interested in a subset that I kept returning to week after week. One of the stations had a rss feed but most did not, and they relied on soundcloud or mixcloud to host the audio content.",
    "I decided to build an aggregator that would abstract the different stations into a normalized 'platform' model, and make djs first-class citizens. I opted for Ruby on Rails for the server layer, and React & Redux for the client. I used an html scraping library (nokogiri) to coerce the output of the different station sites into a single feed, which I exposed via REST API on the server-side.",
    "Ultimately, the project was short-lived. Of the three stations I was building the app around, one is now defunct, one changed to a dramatically different (and improved) ux, which invalidated my parser, and one is still standing. These days I still listen to rinse.fm almost every day, but I have to make do without a bespoke feed experience :-)."
  ],

  tags:[
    "Ruby",
    "Rails",
    "React",
    "Redux",
    "RESTful APIs",
    "JavaScript/ES6",
    "TDD",
    "BDD"
  ]
}
export default data