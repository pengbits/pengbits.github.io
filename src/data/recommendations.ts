import { Recommendation, MEDIUM_TEXT_LENGTH } from '@/types/Recommendation'
const recommendation_data: Recommendation[] = [{
  author: 'Alex Ciepley',
  image:'alex.jpeg',
  title: 'Product Leader',
  date:'January 3, 2026',
  scope:'Alex managed Dave directly',
  body:[
    `I had the good fortune of managing Dave for many years at Showtime. Dave has an unusually broad and potent skill set, paired with a deep curiosity, an unyielding drive to learn, and a strong instinct for getting the details right. He also has a delivery mindset that's grounded in speed, efficiency, and building solutions that scale.`,
    `Dave transitioned into an engineering role from the design team, but he quickly became one of the most thoughtful and capable engineers on my team. His design background proved especially valuable, allowing him to fill unique gaps, such as his ability to work closely with the creative team to champion design systems and help build premium user experiences faster and more consistently.`,
    `Dave's engineering chops are also top-notch. He's a huge asset as an individual contributor and is also well suited to leadership or peer-support roles. He was a trusted mentor to more junior engineers, regularly supporting them through pair programming, thoughtful code reviews, and by helping establish and uphold high engineering standards across the team.`,
    `Dave is an excellent engineer and a wonderful colleague. He makes any team he's part of better, and I recommend him without hesitation.`
  ]
},{
  author: 'Maya Segal',
  image:'maya.jpeg',
  title: 'Managing Director, Co-Head of User Experience at iCapital',
  date: 'December 1 2025',
  scope: 'Maya worked with Dave on the same team',
  body: [
    `I've worked closely with dave on our design system, building a flexible architecture that supported components, themes, and cross-platform consistency.`,
    `Dave was instrumental in improving the design-developer collaboration and workflow, meeting early and including us in work-in-progress prototypes.`,
    `I strongly recommend Dave as a Senior Engineer. He's talented, proactive, and genuinely great to work with.`
  ]
},{
  author: 'Donald Buckley',
  image:'don.jpeg',
  title: 'Board Director | Brand & Digital Transformation Leader | Former Warner Bros. & Showtime CMO | Consumer, Lifestyle & AI Advisor | Creative Discipline & Storytelling Strategist',
  date: 'November 10, 2025',
  scope: 'Donald was senior to Dave but didn\'t manage Dave directly',
  body: [
    `As head of digital and later as CMO of Showtime, I had the good fortune to work with Dave. Throughout that period, Dave collaborated with the creative team to champion design systems, and build premium user experiences faster and at scale.`,
    `I asked Dave a few times if I could sit beside him as he worked so I'd have a better understanding of his challenges and the creative solutions he'd come up with. It was like watching an artist at work.`,
    `As a leader, he supported and mentored engineers throughout, growing the team's skills and ensuring high-quality code.`,
    `He's that rare combination of engineering talent and design artistry - I watched him collaborate effectively across design and product, making complex ideas easier to bring to life.`,
    `He''s also no-drama. He's there to get the job done.`,
    `I highly recommend Dave.`
  ]
},{ 
  author:"Jeff Hatcher",
  image: "jeff.jpeg",
  title: "Senior Software Engineer at Tesla",
  date:"November 6, 2025",
  scope: "Jeff reported directly to Dave",
  body: 
    [
    "Dave Paul is that rare combination of a brilliant engineer and an effective and deeply supportive manager. During my time on the frontend engineering team at Showtime Networks, Dave was instrumental in shaping the early stages of my career. Dave mentored me on modern development practices, including scalable architecture patterns, Test-Driven Development and the implementation of design systems. While Dave set a high bar and expected excellence from his reports, his leadership was defined by accessibility. His door was always open for pair programming and technical discussions, which inspired me to consistently deliver my best, highest-quality work. Dave is an asset to any team and I consider myself lucky to have worked with him."
    ]
},{
  author:"Eric Kramer",
  image: "eric.jpeg",
  title: "Senior Software Engineer at Blue Bottle Coffee",
  date:"November 6, 2025",
  scope: "Eric reported directly to Dave",
  body: 
    [
      "Dave was a great manager and mentor during my tenure at Showtime. He has a rare combination of intelligence and people skills that make him a natural leader. I am grateful to have learned from him everything from software architectural patterns, test driven development and design systems, to successfully working cross functionally and delivering major projects.",
      "One example was the full site rebuild we worked on together. Dave's leadership, pair programming, code review, and agile processes have stuck with me to this day. I also still carry with me some of the personal and career advice he imparted all these years later. Dave helped shape my growth into a senior engineer, and I think anyone who has worked with him would say he has provided value to their work in some way."
    ]
 },{ 
  author:"Marcelo Guerra",
  image: "marcelo.jpeg",
  title: "Senior VP @ BestReviews",
  date:"November 5, 2025",
  scope: "Marcelo was senior to Dave but didn't manage Dave directly",
  body: 
    [
      "Dave and I collaborated on multiple initiatives at Showtime that pushed the boundaries of how we connected with fans online. He has both engineering precision and creative instinct, making complex projects feel effortless.",
      "A great example was our gamification platform, Red Rewards, that turned viewer engagement into an ongoing conversation with the brand. Dave architected the front end and guided the API integration, building an experience that not only delighted users but gave us richer insight into audience behavior and fan culture as it evolved across digital and social channels.",
      "Dave exudes calm confidence and brings sharp execution to every project. He brings ideas to life in a way that's both strategic and beautifully crafted. In short, he's the kind of engineer who strengthens every team he's part of."
    ]
    },{
  author:"Kim Kaufman",
  image: "kim.jpeg",
  title: "Senior Product Manager at HBO Max | Experimentation, Growth Product, Core Product, Experimentation Platform, Subscriptions, Monetization",
  date:"November 5, 2025",
  scope: "Kim worked with Dave but on different teams",
  body: 
    [
    "I had the pleasure of working closely with Dave Paul at Showtime Networks, where we partnered on many projects in the growth space on web and mobile. One project Dave worked on that I was most excited about in terms of it directly impacting the editorial workflow and efficiency was when he launched Paige, the team's CMS for promotional content. I relied heavily on Dave's ability to break down complex requirements, translate them into efficient UI solutions, and consistently deliver high-quality code that elevated the product experience.",
    "Beyond day-to-day feature development, Dave played a key role in powering our experimentation and personalization efforts for Showtime's marketing site and the buy flow — coding A/B tests and building custom Optimizely integrations that helped our team move fast, learn quickly, and drive measurable impact across Showtime's digital experiences. Dave worked on the most impactful buy flow experiments and built the buy flow to support many streaming partners, as well as the DTC buy flow.",
    "Dave brings a rare combination of technical depth, strong product intuition, and cross-functional collaboration skills. He always approached challenges with curiosity, ownership, and a positive attitude, making them an invaluable teammate and someone I genuinely enjoyed working with and miss working with today.",
    "I'd highly recommend Dave to any engineering team looking for a talented and thoughtful front-end developer who's motivated by building high-quality user experiences and driving business impact."
]
},{
  author:"Mallory Dash",
  image: "mallory.jpeg",
  title: "VP, Retention Marketing at AMC Networks",
  date:"November 3, 2025",
  scope: "Mallory worked with Dave but on different teams",
  body: 
    [
    "I had the pleasure of working with Dave at Showtime, and he was truly a standout front-end developer on the team. He consistently brought creativity, precision, and a user-first mindset to every project.",
    "Dave played a key role in building a seamless experience that helped potential SHO customers easily compare our product across multiple platforms and price points — a project that had a direct impact on acquisition performance. He also led the front-end development of data-driven experiments and personalization efforts, using Optimizely to help our team continuously test, learn, and optimize.",
    "Beyond his technical skill, Dave is a thoughtful collaborator who makes design and product partnerships effortless. He's also incredibly detail-oriented — implementing custom design system themes that kept our brand voice consistent while meeting evolving marketing goals.",
    "Any team would be lucky to have Dave; he's not only talented but also just great to work with."
    ]
},{
  author:"Jennifer Gallardo",
  image: "jen.jpeg",
  title: "Senior Director, Product & Technology Solutions | Engineering Background | Product Strategy | Digital Transformation Leader",
  date:"November 22, 2010",
  scope: "Dave was senior to Jennifer but didn't manage Jennifer directly",
  body: 
    [
    "Dave is an exceptionally talented developer who is continually discovering new ways to solve problems. As such, I enjoyed working with his team on various projects as it was always an opportunity to develop new skills. Also his background in design makes him an incredible asset as he understands user experience concerns brought forth by stakeholders and can develop prototypes that are functional and aesthetically pleasing. In addition, Dave's laid back attitude and ability to communicate cross departmentally makes him a great addition to any team."
    ]
  },{
  author:"James Napolitano",
  image: "james.jpeg",
  title: "VP of Technology Audience Acquisition and Growth at NBC Universal",
  date:"March 17, 2009",
  scope: "James was senior to Dave but didn't manage Dave directly",
  body: 
    [
    "Dave is one of most organized and efficient developers I've had the pleasure to work with."
    ]
}]

export default recommendation_data.map(r => {
  const bodyText = r.body.join("\n")
  const mediumText = bodyText.length > MEDIUM_TEXT_LENGTH ? bodyText.substring(0,MEDIUM_TEXT_LENGTH) + '…' : bodyText
  return {...r,
    mediumText
  }
})