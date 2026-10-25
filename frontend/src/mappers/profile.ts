import type { Profile } from "../interfaces/Profile"

export const profile = (data: any) => {

    const profile: Profile = {
        id: data.pro_id,
        name: data.pro_name,
        abilities: data.pro_abilities,
        users: data.users
    };

    return profile;
}