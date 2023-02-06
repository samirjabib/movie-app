import { useFetchApi } from "../../../hooks"

export const HeroSlide = ({ mediaType, mediaCategory}) => {

    const { gnres, movies } = useFetchApi({ mediaType, mediaCategory})

    console.log(gnres)
    
    return(
        <div>

        </div>
    )
}