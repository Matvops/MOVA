import type { User } from "../../interfaces/User";

export const initialUserValue: User = {
    user: '',
    abilities: [],
    name: '',
    profile: '',
    email: '',
    branch: '',
    can: (ability: string) => {
        return initialUserValue.abilities.includes(ability);
    }
}