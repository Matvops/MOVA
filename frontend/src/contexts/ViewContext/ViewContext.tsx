import { createContext } from "react";
import type { View } from "../../types/View";

type ViewContextType = {
    view: View,
    setView: React.Dispatch<React.SetStateAction<View>>
}

const initialValue: ViewContextType = {
    view: 'dashboard',
    setView: () => {}
}


export const ViewContext = createContext<ViewContextType>(initialValue);