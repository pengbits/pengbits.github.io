import {Project} from "@/types/project"
const projects:Project[] = [{
  id:"1",
  title:"Sho.com",
  slug:"sho.com",
  description:"Full redesign of Showtime's marketing site, leveraging a Design System and reusable component library to support the build."
},{
  id:"2",
  title:"Sho.com Design System Styleguide",
  slug:"sho.com-design-system",
  description:"The internal styleguide and developer-facing documentation for the sho.com Design System."
},{
  id:"3",
  title:"Paige",
  slug:"paige-cms",
  description:"A React client for a CMS with features such as composable form UI, date preview, rich-text-editor, filters, themes, and support for 500+ promotions, 50+ campaigns, and 20+ form types."
},{
  id:"4",
  title:"Otto",
  slug:"otto",
  description:"A data warehouse built in AWS, facilitating a better understanding of customer acquisition through large scale data extraction and analysis.",
  draft:true,
},{
  id:"5",
  title:"Flatbush Pediatrics",
  slug:"flatbush-pediatrics",
  description:"A clone of the Tribeca Pediatrics Patient Portal."
},{
  id:"6",
  title:"Park.me",
  slug:"park.me",
  description:"A copy of the NYC (muni meter) parking app."
},{
  id:"7",
  title:"Asbo",
  slug:"asbo",
  description:"An aggregator of a few London-based internet radio stations. Makes use of nokigiri for scraping html content from multiple sources, parsing and gathering into unified models, which are ingested by the client via REST apis.",
  links:[{
    title:"github",
    url:"https://github.com/pengbits/asbo"
  }]
}]
export default projects.filter(p => !p.draft)