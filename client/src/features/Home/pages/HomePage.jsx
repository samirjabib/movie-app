import { HeroSlide } from "../components"
import { tmdbConfigs } from "../../../api";




export const HomePage = () => {
    return (
        <div>
            <HeroSlide 
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
        </div>
    );
};

