import { tmdbConfigs } from "../../../api"
import { HeroSlide } from "../../Home/components"
import { MediaList } from "../components"



export const MoviesPage = () => {
    

    return(
        <div className="h-auto border-[.1px] border-white dark:border-black">
            {/* <HeroSlide 
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            /> */}
            <MediaList
               mediaType={tmdbConfigs.mediaType.movie}
               title="Movies"
            />
        </div>
    )
}