import { useFetchApi } from "../../../hooks"

export const HeroSlide = ({ mediaType, mediaCategory}) => {

    const { gnres, movies } = useFetchApi({ mediaType, mediaCategory})
    console.log(gnres)
    console.log(movies)
    
    return(
        <div className="bg-white dark:bg-black h-screen">

        </div>
    )
}