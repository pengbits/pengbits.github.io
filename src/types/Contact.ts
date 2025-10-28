type ContactPlatform = {
  platform: string,
  handle: string,
  baseUrl: string,
}

export type Contact = {
  headline: string,
  platforms: ContactPlatform[]
}
