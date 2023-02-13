import { tmdbConfigs } from "../../../api"
import { HeroSlide } from "../../Home/components"
import { MediaList } from "../components"



export const SeriesPage = () => {
    return(
        <>
        <HeroSlide 
            mediaType={tmdbConfigs.mediaType.tv}
            mediaCategory={tmdbConfigs.mediaCategory.popular}
        />
        <MediaList mediaType={"movie"}/>
    </>
    )
}