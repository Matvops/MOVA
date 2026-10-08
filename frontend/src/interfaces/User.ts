
export interface User {
    user: string,
    abilities: string[],
    profile: string,
    name: string,
    email: string,
    branch: string
    can: (ability: string) => boolean
}