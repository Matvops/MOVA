import { createContext } from "react"
import { initialUserValue } from "./initialUserValue"
import type { User } from "../../interfaces/User"

type UserContextType = {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>
}

const initialUserContext = {
    user: initialUserValue,
    setUser: () => {}
}

export const UserContext = createContext<UserContextType>(initialUserContext)