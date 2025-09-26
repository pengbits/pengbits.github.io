import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["3"]

const data:ProjectDetails = {
  ...meta,
  body:[
    `In addition to working on the public-facing marketing site for Showtime, I built a number of admin/publishing tools to support the Editorial team.
    Paige was a client for a headless CMS, to be used for authoring and managing promotional content on the site. It was written in React, with Redux for state management, and backed by a series of RESTful apis.
    `,

    `The design made use of a kind of data-grid where each of the content-blocks for a given section were presented as rows, and you could toggle the row open to get to a WYSIWYG editor inline.
    On top of that, there was all the functionality you would expect with an admin view like this, such as pagination, search and filtering of the data-grid content.`,
    
    `In addition to the complex user interactions and heavy state challenges that the design presented, I had to support a lot of flexibility in the main editor component itself. The data-object that represented the content-block was likely to change, and  we needed the editor to accommodate cases where only a subset of the fields were in use, as well as to be able to render different form elements for a given field, depending on the context.`,

    `I ended up using a kind of Factory pattern, where each of the possible Form Input types were modelled as React components, and they were assembled into the parent Form component with composition. The overall shape of the form, and the mapping of input types to fields was all defined in a json config, so that we could fork the behavior and create a slightly different experience in certain contexts.`,

    `This worked really well because it was easy to reason about the application state, it was obvious where new behavior should go, and each of the input types could scale up in complexity as needed.  It was also great for testing the form inputs and iterating on them in isolation. When we added a new feature, for example, a bad link checker for images that fetched the path in the background and rendered an error if it 404d, it was obvious where the functionality should live.`,

    `One of my favorite things about this project was that I was able to use it as test case for bringing in Test-Driven-Development with Jest and Cucumber. I had been learning about TDD on my own, but we had not used it on the frontend team. This resulted in higher code quality, and richer in-code documentation around the business logic.`
  ],
  tags:[
    "CMS",
    "React",
    "Redux",
    "RESTful APIs",
    "JavaScript/ES6",
    "Tools",
    "Showtime",
    "TDD"
  ]
}
export default data