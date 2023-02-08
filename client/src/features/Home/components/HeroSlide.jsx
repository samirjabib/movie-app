import { useFetchApi } from "../../../hooks"
import { Swiper, SwiperSlide } from "swiper/react";

import { useGetPopularMoviesQuery } from "../../../redux"


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
                        return(
                            <SwiperSlide key={index}>
                                <div className="w-full h-[850px] bg-gradient-to-r absolute from-white dark:from-black"></div>
                                <div className="w-full h-[850px] bg-white dark:bg-black border-2 border-red-500">

                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}