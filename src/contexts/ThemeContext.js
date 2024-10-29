import React, { createContext, useContext, useState } from 'react'


export const ContextTheme = createContext()



const ThemeProvider = ({children}) => {
    const [theme,setTheme] =  useState('light') // dark || light


    return <ContextTheme.Provider value={{theme,setTheme}} >{children}</ContextTheme.Provider>

}


const useTheme = () =>  {
    const context = useContext();

    return context;

}



export  {ThemeProvider ,useTheme};