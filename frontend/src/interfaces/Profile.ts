import type { User } from "./User";

export interface Profile {
    abilities: string[],
    id: number,
    name: string,
    users?: User[]
}