import { createContext, useReducer } from "react"
import DarkModeReducer from "./darkModeReducer";

const INI_STATE={
darkMode:false
}

export const DarkModeContext=createContext(INI_STATE);
export const DarkModeContextProvider=({children})=>{
const [state,dispatch]= useReducer(DarkModeReducer,INI_STATE);
return(
    <DarkModeContext.Provider value={{darkMode: state.darkMode,dispatch}}>{children}</DarkModeContext.Provider>
)
}