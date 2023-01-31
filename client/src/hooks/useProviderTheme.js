import { useState, useEffect } from "react";

export const useProviderTheme = () => {

    const [ theme, setTheme ] = useState(null)


    useEffect( () => {
        if(window.matchMedia('prefers-colo-sheme: dark').matches){
            setTheme('dark')
        }
        setTheme('light')
    }, [])
    
    useEffect(() => {
        if (theme === "dark") {
        document.documentElement.classList.add("dark");
        } else {
        document.documentElement.classList.remove("dark");
        }
      }, [theme]);
    
    
    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    
    
    
    return{
        handleThemeSwitch,
        
        theme
    }
}
