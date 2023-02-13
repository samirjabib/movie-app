import { tmdbConfigs } from "../../../api"
import { HeroSlide } from "../../Home/components"
import { MediaList } from "../components"



export const MoviesPage = () => {
    

    return(
        <>
            <HeroSlide 
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
            <MediaList
               mediaType={tmdbConfigs.mediaType.movie}
               title="Movies"
            />
        </>
    )
}