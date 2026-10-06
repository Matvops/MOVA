import React, { useState } from "react"
import { initialUserValue } from "./initialUserValue"
import type { User } from "../../interfaces/User";
import { UserContext } from "./UserContext";

type UserProviderProps = {
  children: React.ReactNode
}

export function UserProvider({ children }: UserProviderProps) {

  const [user, setUser] = useState<User>(initialUserValue);

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );  

}