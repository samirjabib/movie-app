import { tmdbConfigs } from "../../api"


export const CardItem = ({movie}) => {

    return(
            <div className="mt-2 h-full transition-all relative hover:scale-95" >
                 <img
                    src={tmdbConfigs.backdropPath(movie.poster_path || movie.backdrop_path )}
                    alt={movie.title}
                    className ='object-cover h-full w-full rounded-lg border-4 border-transparent '                    
                />

                <div
                    className="absolute top-0 left-0 w-full h-full  transition-all duration-200 hover:bg-white/50
                    dark:hover:bg-black/50  opacity-0 hover:opacity-100  text-black dark:text-white flex flex-col 
                    justify-end"
                >
              
                    <div className="mb-6 ml-2">
                        <p>{movie.name || movie.title}</p>
                        <div className="flex flex-row ">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <p className="ml-2 text-sm font-bold  text-gray-500 dark:text-green-200">                                                    
                                {movie.vote_average}
                            </p>
                        </div>
                    </div>
               
                </div>
            </div>
    )
}