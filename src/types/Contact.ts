type ContactPlatform = {
  platform: string,
  handle: string,
  baseUrl: string,
}

export type Contact = {
  platforms: ContactPlatform[]
}

