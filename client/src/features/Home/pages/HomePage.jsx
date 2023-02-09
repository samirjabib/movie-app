import { HeroSlide, MediaSlide } from "../components"
import { tmdbConfigs } from "../../../api";




export const HomePage = () => {
    return (
        <div className=" h-auto bg-white dark:bg-black ">
            <HeroSlide 
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
            <MediaSlide
                title="popular movies"
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
            <MediaSlide
                title="popular series"
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
            <MediaSlide
                title="top rates movies"
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
            <MediaSlide
                title="top rated series"
                mediaType={tmdbConfigs.mediaType.movie}
                mediaCategory={tmdbConfigs.mediaCategory.popular}
            />
        </div>
    );
};

