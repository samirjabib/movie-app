import { useEffect, useState } from "react"

    
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/media/movies', display:'Movies'},
    { path:'/media/series', display:'Series'},
    { path:'/search', display:'Search'},

]

const authNav = [
    { path:'/', display:'Home'},
    { path:'/movies', display:'Movies'},
    { path:'/series', display:'Series'},
    { path:'/search', display:'Search'},
]

const adminNav = [
    { path:'/', display:'Home'},
    { path:'/movies', display:'Movies'},
    { path:'/series', display:'Series'},
    { path:'/search', display:'Search'},
]


export const useNavLinks = (auth) => {
    const { role, status } = auth

    const [ navLinks, setNavLinks ] = useState(defaultNav)
    
    useEffect( () => {
        if(role === "admin" && status ==="authenticated"){
            setNavLinks(adminNav) 

        }
        if(role === "client" && status ==="authenticated"){
            setNavLinks(authNav) 

        }
        if(status === "not-authenticated"){
            setNavLinks(defaultNav) 

        }
    }, [auth])

    return navLinks

    
}