import { tmdbConfigs } from "../../api"
tmdbConfigs.posterPath

export const CardItem = ({movie}) => {
    console.log(movie)
    return(
            <div className="mt-6  h-full" >
                 <img
                    src={tmdbConfigs.backdropPath(movie.poster_path || movie.backdrop_path )}
                    alt={movie.title}
                    className ='object-cover h-full w-full rounded-lg border-4 border-transparent'                    
                />
            </div>
    )
}