import {useContext, createContext} from 'react'

export const themeContext = createContext({
    themeMode:"dark",
    darkTheme: () =>{ },
    lightTheme: () =>{ }
})

export const ThemeProvider  = themeContext.Provider

const UseTheme = () =>{
    return useContext(themeContext)
}
export default UseTheme