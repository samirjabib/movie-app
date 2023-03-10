import { useEffect } from "react";
import { useParams } from "react-router";
import { tmdbConfigs } from "../../../api";
import { Loading } from "../../../components/Loading/Loading";
import { useGetDetailMediaQuery } from "../../../redux/api/tmdbApi";

import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { ActorsCard, VideoComponent } from "../components";

export const DetailMediaPage = () => {
  const { mediaType, id: mediaId } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useGetDetailMediaQuery({ mediaType, mediaId });

  console.log(movie);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  console.log(movie);

  return (
    <div className="relative ">
      <img
        src={tmdbConfigs.backdropPath(
          movie?.backdrop_path || movie?.poster_path
        )}
        className="absolute h-full   w-full object-cover top-0"
      />
      <div className="w-full  h-full  absolute from-white bg-white/50 dark:bg-black/70"></div>
      <div className="relative flex flex-col container mx-auto ">
        <div className=" mt-24 w-full p-4 flex flex-col-reverse items-center md:flex-row-reverse md:justify-end md:items-start ">
          <div className="flex flex-col w-4/4 md:w-3/4 mt-8 p-4">
            <h2 className=" text-3xl md:text-4xl text-black dark:text-white text-center font-bold  md:text-start w-4/4  ">
              {movie.name || movie.title}
            </h2>
            <div className="mt-2 mb-8">
              <div className="flex flex-row justify-end md:justify-start mb-2">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-400 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p className="ml-2 text-sm font-bold text-gray-800 dark:text-green-200">
                  {movie.vote_average}
                </p>
              </div>

              <ul className="flex flex-row justify-end md:justify-start gap-4">
                {movie?.genres.map((genre) => (
                  <p
                    key={genre.id}
                    className="text-gray-500 dark:text-green-200 text-xs md:text-sm  relative  "
                  >
                    {genre.name}
                  </p>
                ))}
              </ul>
            </div>

            <p className="text-start dark:text-white">{movie.overview}</p>
            <div className="mt-12 max-w-2xl">
              <h4 className="text-dark dark:text-white font-semibold uppercase mb-2">
                Actors in movie
              </h4>
              <Swiper
                slidesPerView="auto"
                grabCursor={true}
                style={{ width: "100%", height: "max-content" }}
                className="grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-6 p-4  "
              >
                {movie.credits.cast.map((actor) => (
                  <SwiperSlide key={movie.id}>
                    <ActorsCard actor={actor} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <img
            src={tmdbConfigs.backdropPath(
              movie?.poster_path || movie?.backdrop_path
            )}
            alt={movie.title}
            className="object-fill  rounded-lg border-transparent w-56 md:w-96  shadow-sm shadow-dark mt-6 "
          />
        </div>

        <div className=" h-72 w-full z-50">
          <VideoComponent/>
        </div>
        
      </div>
    </div>
  );
};
