import { CardItem } from "../../../components/CardItem"
import { useGetPopularMoviesQuery } from "../../../redux"

import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

export const MediaSlide = ({title, mediaType, mediaCategory}) => {

    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType, mediaCategory, page:1 })

    const popularMovies = data?.response.results

    return(
        <div className="container mx-auto mt-14 ">
            <p className="text-black text-2xl uppercase font-semibold dark:text-white">{title}</p>
                <Swiper
                     slidesPerView="auto"
                     grabCursor={true}
                     style={{ width: "100%", height: "max-content" }}
                     className='grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-6'
                >
                    {
                    popularMovies?.map( movie => {
                            return(
                                <SwiperSlide
                                key={movie.id}
                                >
                                    <CardItem
                                        movie={movie}
                                        
                                    />
                                </SwiperSlide>
                            )
                        } )
                    }
                </Swiper>            
            </div>
    )
}