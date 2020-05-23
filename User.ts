export type User = {
  name: string,
  join: (team: string) => string
}

export function welcome(user: User) {
  return `Welcome, ${user.name}, ${user.join('team1')}`
}
