import { Contact } from "@/types/Contact"

const contact:Contact = {
  headline:'I\'m always interested in connecting with other Software Engineers, Designers, Product/Engineering Managers, and I am currently seeking a new role. If you think there might be a fit on your team, you have a question, or you just want to say hi, hit me up!',
  platforms: [{
    platform: 'email',
    handle: 'peng.bits@gmail.com',
    baseUrl: 'mailto:'
  },{
    platform: 'linkedin',
    handle: 'davepaul',
    baseUrl: 'https://linkedin.com/in/'
  },{
    platform:'github',
    handle: 'pengbits',
    baseUrl: 'https://github.com/'
  },{
    platform:'discogs',
    handle: 'Mode-Raw',
    baseUrl: 'https://www.discogs.com/artist/1893364-'
  }]
}

export default contact 