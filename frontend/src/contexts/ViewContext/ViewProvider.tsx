import { useState } from "react";
import type { View } from "../../types/View";
import { ViewContext } from "./ViewContext";


type ViewContextProvider = {
  children: React.ReactNode
}

export function ViewProvider({ children }: ViewContextProvider) {

  const [view, setView] = useState<View>('dashboard');

  return (
    <ViewContext.Provider value={{view, setView}}>
      {children}
    </ViewContext.Provider>
  )
}