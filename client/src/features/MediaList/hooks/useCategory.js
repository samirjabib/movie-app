import { useState } from "react";

export const useCategory = () => {
    const [ mediaCategory, setMediaCategory] = useState("popular");

    const setCategory = () => {
        console.log('hice click')
        if(mediaCategory === "popular"){
            setMediaCategory("top_rated")
        }
        if(mediaCategory === "top_rated"){
            setMediaCategory("popular")
        }
    }



    return{
        mediaCategory,
        setCategory
    }
}