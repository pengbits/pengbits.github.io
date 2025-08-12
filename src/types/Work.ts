export type Role = {
  title: string,
  startDate: string,
  endDate: string,
  achievements: string[]
}

export type Company = {
  name: string,
  location: string,
  roles: Role[]
}