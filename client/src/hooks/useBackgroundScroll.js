import { useEffect, useState } from "react";

export const useBackgroundScroll = () => {
    
    const [ backgroundScroll, setBackgroundScroll ] = useState(true);
    
    const backgroundHandle = () => {
        if(window.scrollY >= 100){
            setBackgroundScroll(false);
        } else {
            setBackgroundScroll(true);
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', backgroundHandle)
    }, [])
    

    return{
        backgroundScroll,
        
        backgroundHandle
    }
}