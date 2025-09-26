import { Contact } from "@/types/Contact"

const contact:Contact = {
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
  }]
}

export default contact 