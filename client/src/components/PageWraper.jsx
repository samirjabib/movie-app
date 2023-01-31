import { useEffect } from "react"

export const PageWrapper = ({ state, children}) => {

    useEffect( () => {
        window.scrollTo(0, 0)
    }, []);

    useEffect( () => {
        window.scrollTo(0, 0)
        setAppState(state)
    }, [state])

    return(
        children
    )
};