import { tmdbConfigs } from "../../api"

export const CardItem = ({movie}) => {
    console.log(movie)
    return(
            <div className="mt-8 ml-3 ">
                 <img
                    src={tmdbConfigs.backdropPath(movie.backdrop_path || movie.poster_path)}
                    alt={movie.title}
                    className="text-black  dark:text-white w-full  flex items-center justify-center object-cover object-top rounded-lg"
                    />
            </div>
    )
}