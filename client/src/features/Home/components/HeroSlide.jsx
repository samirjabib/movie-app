import { Swiper, SwiperSlide } from "swiper/react";
import { Loading } from "../../../components/Loading/Loading";

import 'swiper/css';



import { useGetPopularMoviesQuery, useGetCategoriesMoviesQuery } from "../../../redux"

import { tmdbConfigs } from "../../../api";

export const HeroSlide = ({ mediaType, mediaCategory}) => {

    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType, mediaCategory, page:1 })
    const { data:categories, isLoading:isLoadingCategories, isError:isErrorCategories } = useGetCategoriesMoviesQuery({mediaType})

    const arrayCategories = categories?.response.genres

    const popularMovies = data?.response.results

    if(isLoading){
        return <Loading/>
    }
    

    const reducedString = (str, num) => {
        if( str?.length > num) {
           return str.slice(0,100) + '...'
        } else {
            return str
        }
    }

 
    return(
        <div className="relative">
            <Swiper
                grabCursor={true}
                loop={true}
                preventInteractionOnTransition={true}
            >
                {
                    popularMovies?.map( (movie, index) => {
                        return(
                            <SwiperSlide key={index}>
                                
                                <div className="w-full bg-white dark:bg-black h-[85vh] ">
                                    <div className="w-full h-full bg-gradient-to-t absolute from-white dark:from-black"></div>

                                    <img
                                        src={tmdbConfigs.backdropPath(movie.backdrop_path || movie.poster_path)}
                                        alt={movie.title}
                                        className="text-black  dark:text-white w-full  h-full flex items-center justify-center object-cover object-top"

                                    />
                                    <div className="absolute z-50 top-[30%]  left-[7.5%] ">
                                        <h2 className=" text-3xl md:text-5xl text-black dark:text-white font-bold">
                                            {movie.title}
                                        </h2>
                                        <div 
                                            className="w-96 flex flex-row mt-2 justify-between"
                                        >
                                                <div class="flex flex-row self-center">
                                                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                        <p class="ml-2 text-sm font-bold text-gray-500 dark:text-green-200">                                                    
                                                            {movie.vote_average}
                                                        </p>
                                
                                                </div>
                                                <div className="flex flex-row ">
                                                    {[...movie.genre_ids].splice(0,2).map(
                                                        (genreId, index )=> {
                                                            return(
                                                                <div 
                                                                className="text-gray-700 dark:text-green-200  ml-2 relative md:right-6 right-12"
                                                                key={index}
                                                            >
                                                                {arrayCategories?.find( categorie => categorie.id === genreId ) && arrayCategories?.find( categorie => categorie.id === genreId).name}
                                                                </div>
                                                            )
                                                        

                                                        }
                                                    )}
                                                </div>

                                        </div>
                                        <p className="text-black dark:text-white mt-6  w-72 md:w-96">
                                            {reducedString(movie.overview, 250)}
                                        </p>
                                        <button className="uppercase text-black dark:text-white bg-green-500 py-2 px-4 rounded-md mt-6">
                                            Watch Now
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        
        </div>
    )
}