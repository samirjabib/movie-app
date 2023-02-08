import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';



import { useGetPopularMoviesQuery } from "../../../redux"

import { tmdbConfigs } from "../../../api";

export const HeroSlide = ({ mediaType, mediaCategory}) => {
    console.log(mediaType, mediaCategory)

    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType, mediaCategory, page:1 })
    const popularMovies = data?.response.results
    console.log(popularMovies)

    
    
 
    return(
        <div className="bg-white dark:bg-black h-screen">
            <Swiper
                grabCursor={true}
                loop={true}
                style={{width:"100%", height:"max-content"}}
            >
                {
                    popularMovies?.map( (movie, index) => {
                        console.log(movie)
                        return(
                            <SwiperSlide key={index}>
                                <div className="w-full h-screen bg-gradient-to-r absolute from-white dark:from-black"></div>
                                <div className="w-full h-screen bg-white dark:bg-black">
                                    <img
                                        src={tmdbConfigs.backdropPath(movie.backdrop_path || movie.poster_path)}
                                        alt={movie.title}
                                        className="text-black dark:text-white border-2 border-black h-screen w-full flex items-center justify-center object-cover"

                                    />
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}