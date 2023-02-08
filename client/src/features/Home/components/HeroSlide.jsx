import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';



import { useGetPopularMoviesQuery, useGetCategoriesMoviesQuery } from "../../../redux"

import { tmdbConfigs } from "../../../api";

export const HeroSlide = ({ mediaType, mediaCategory}) => {
    console.log(mediaType, mediaCategory)

    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType, mediaCategory, page:1 })

    const { data:categories, isLoading:isLoadingCategories, isError:isErrorCategories } = useGetCategoriesMoviesQuery({mediaType})
    console.log(categories)

    const popularMovies = data?.response.results

    
    if(isLoading){
        return <div className="text-black justify-center items-center h-screen text-4xl">Loading</div>
    }
 
    return(
        <div className="bg-white dark:bg-black h-screen">
            <Swiper
                grabCursor={true}
                loop={true}
                style={{width:"100%", height:"max-content"}}
            >
                {
                    popularMovies?.map( (movie, index) => {
                        // console.log(movie)
                        return(
                            <SwiperSlide key={index}>
                                <div className="w-full h-screen bg-gradient-to-r absolute from-green-100 dark:from-black z-50"></div>
                                <div className="w-full h-screen bg-white dark:bg-black relative ">
                                    <img
                                        src={tmdbConfigs.backdropPath(movie.backdrop_path || movie.poster_path)}
                                        alt={movie.title}
                                        className="text-black  dark:text-white  h-screen w-full flex items-center justify-center object-cover object-top"

                                    />
                                    <div className="absolute z-50 top-[30%]  left-[7.5%] ">
                                        <h2 className="text-5xl text-black dark:text-white font-bold">
                                            {movie.title}
                                        </h2>
                                        <div className="w-96  flex flex-row-reverse mt-2">
                                            <div>

                                            </div>
                                            <div className="text-gray-700 dark:text-green-200 full w-24">
                                                Category
                                            </div>
                                        </div>
                                        <p className="text-black dark:text-white mt-6 w-96">
                                            {movie.overview}
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