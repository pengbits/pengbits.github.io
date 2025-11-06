import { Project,ProjectDetails } from "@/types/Project";
import {projects_map} from "@/data/projects";
const meta:Project = projects_map["9"]

const data:ProjectDetails = {
  ...meta,
  images: [{
    src:   "/brooklyn-anthem/01-front_600x600.jpg",
    aspectRatio: "square"
  },{
    src:   "/brooklyn-anthem/02-back_600x600.jpg",
    aspectRatio: "square"
  }],
  youtube: `https://www.youtube.com/embed/X1BzRw5Vnv0?si=-4SFv8BEYuFVsqyI`,
  highlights: [
    "Performed art direction, packaging design, and photography for a crucial release on Sound-Ink Records.",
    "Arguably the first Grime track produced and vocaled in the US, I was there to capture the moment in visual form.",
    "Overcame logistical hurdles ('05 MTA Strike!), managed competing client desires and sourced a last-minute location for the shoot in order to execute the sleeve art on brand and on time.",
    "Leveraged an intimate familiarity with the visual language of hiphop and dancehall releases to craft a timeless sleeve design."
  ],
  body:[
    `[https://www.discogs.com/artist/63564-Team-Shadetek](Team Shadetek) are a production duo that started off in the early-naughties [https://en.wikipedia.org/wiki/Intelligent_dance_music](IDM) scene but quickly graduated to working with vocalists and experimenting with other genres. I have known them since childhood and we all started deejaying around the same time. When we first heard [https://www.discogs.com/artist/197311-Wiley-2](Wiley)'s [https://www.youtube.com/watch?v=u3rWH9pWkVQ](Eskimo Riddim), followed shortly by the [https://www.discogs.com/artist/78659-Dizzee-Rascal](Dizzee Rascal) full-length [https://www.discogs.com/master/37683-Dizzee-Rascal-Boy-In-Da-Corner](Boy in Da Corner) in 2003, we were blown away by this totally new sound from the UK, with MCs spraying rapid-fire bars over squelchy bass sounds and skittering metallic percussion - a genre that would later come to be known as Grime. With their musical background being what it was, it was only a matter of time until Shadetek would try their hand at building some Grime tunes, drawing inspiration from the rapidly developing scene in London, while keeping their signature sound intact. Fast forward to 2005, and they had cooked up a number of convincing instrumentals and recorded a vocal from Dancehall producer/singjay [https://www.discogs.com/artist/1067100-77klash](77Klash) and Brooklyn legend [https://www.discogs.com/artist/1310071-Jahdan-Blakkamoore](Jah Dan Blakkamore). [https://www.discogs.com/label/71413-Sound-Ink-Records](Sound-ink) had signed them for an album release and they needed me to come up with a sleeve design for the single.`,
    
    `Brooklyn Anthem is a curious entry in the canon, at once part of and yet separate from the Grime scene which was so insular and London-focused at the time. I know that Matt was drawing inspiration from the proto-grime of [https://www.discogs.com/artist/198700-Jon-E-Cash](Jon E Cash) and [https://www.discogs.com/artist/141039-Jammer](Jammer)'s early, scene-defining contributions like [https://www.youtube.com/watch?v=ria7PlQcQBc](Feedback) - you can kind of hear it in how the drums build. I don't know if they were conciously trying to avoid making an obvious copy, or if it was just happenstance and a side effect of the artists that they had access to, but they ended up making a triumphant new-york-centric record, suitable for dropping Flex bombs over. 77Klash used his verse to catalog all the ways that Kings County runs things, and Jah Dan laid down a classic reggae boast for the hook. `,
    `Dancehall looms heavy in Grime's DNA, so in that sense, Klash's yard-inflected verse is textbook Grime, but there were some interesting quirks that occurred in the translation. In one classic Grime pattern, the MC will refrain from rhyming the last phrase in a bar, and  instead will literally just repeat the same word, like when Wiley says: &quot;*When a man says TIGER TIGER, you better know I'm the TIGER TIGER E3, L-O-N, TIGER TIGER...*&quot; 77Klash took this pattern and inverted it, front-loading the one-line flow with &quot;*BROOKLYN! wild like a zoo! BROOKLYN bad man a pass through!*&quot;. In his book [https://jaceclayton.com/Uproot-Travels-in-21st-Ct-Music-and-Digital-Culture](Uproot), Jace Clayton explores the impact that the song had, in the first wave, and later in its second life as a backing track for a viral dance challenge in an under-18s party scene in Flatbush. But we're getting ahead of ourselves here - they just needed a sleeve design!`,
    
    `When Team Shadetek came to me for the artwork, they made it clear that 77Klash was &quot;the star of the record&quot;. They knew it was an important track and we had to find the right tone for the visuals... but it wasn't clear what that should be. We made some loose plans to take photos of everyone and I started thinking about the vibe. Funnily enough it was the eve of the [https://en.wikipedia.org/wiki/2005_New_York_City_transit_strike](2005 MTA transit strike) when Matt made his way out to my studio in Brooklyn - he was worried about the logistics of getting there (this was before ride-share apps) and decided to hop in a car the night before because somebody had a ride. Zack ended up getting totally stranded somewhere and missed the initital shoot but 77Klash showed up a few hours later. (*Extremely punctual by rapper standards.*).`,
    `With two out of three of the talent on set we started spitballing concepts for the shoot. Matt threw out the idea of posting up at a bodega somewhere but I felt like this was kind of cliched and not quite what we were after. We started losing daylight and I was like: let's just shoot here!. I had access to a staircase that wouldn't be out of place in a [https://www.youtube.com/watch?v=nTF_T47CDnI](Lord of the Mics) clip, and the exterior entrance had a suitable level of grit. When the light started to fully go, I pulled out some construction floodlights and Matt and 77Klash chopped it up on my stoop.`,
    
    `As these things so often go, I couldn't find one photo that both Matt and 77Klash approved of, and I had to photograph Zack a week later. I waited till night and pulled out the same floodlights - and it totally worked. The consistency of the lighting goes a long way to hiding my photoshop stitches - it's actually three different photos pasted together. I later learned that 77Klash wasn't totally happy with his photo (*&quot;I look soft man, how you got me smiling*?!!&quot;), but hey, that's how it goes sometimes. I have to think that with the passage of time he's come around. Zack said it best: *&quot;Nah it's perfect - he's got the fire in his eyes...&quot;*.  `

  ],  
  relatedProjects: [
    '8'
  ],
  tags:[
    "Records",
    "Packaging",
    "Design",
    "Typography",
    "Photography",
    "NYC",
    "Grime",
    "Dancehall",
    "77 Klash",
    "Jahdan Blakkamore",
    "Team Shadetek",
    "Sound-Ink"
  ]
}
export default data