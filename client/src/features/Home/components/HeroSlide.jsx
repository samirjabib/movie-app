import { useFetchApi } from "../../../hooks"
import { Swiper, SwiperSlide } from "swiper/react";

export const HeroSlide = ({ mediaType, mediaCategory}) => {

    const { gnres, movies } = useFetchApi({ mediaType, mediaCategory})
 
    return(
        <div className="bg-white dark:bg-black h-screen">
            <Swiper
                grabCursor={true}
                loop={true}
                style={{width:"100%", height:"max-content"}}
            >
                {
                    <SwiperSlide>
                        
                    </SwiperSlide>
                }

            </Swiper>
        </div>
    )
}