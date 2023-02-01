import { useFetchApi } from "../../../hooks"

export const HeroSlide = () => {

    const { gnres, movies } = useFetchApi()

    console.log(gnres)
    
    return(
        <div></div>
    )
}