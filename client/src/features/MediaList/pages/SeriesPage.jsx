import { tmdbConfigs } from "../../../api"
import { HeroSlide } from "../../Home/components"
import { MediaList } from "../components"



export const SeriesPage = () => {
    return(
        <>

       <MediaList
               mediaType={tmdbConfigs.mediaType.tv}
               title="Series"
        />
    </>
    )
}