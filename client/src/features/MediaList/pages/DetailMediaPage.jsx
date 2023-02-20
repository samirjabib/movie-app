import { useParams } from "react-router";
import { tmdbConfigs } from "../../../api";
import { Loading } from "../../../components/Loading/Loading";
import { useGetDetailMediaQuery } from "../../../redux/api/tmdbApi";

export const DetailMediaPage = () => {
  const { mediaType, id: mediaId } = useParams();

  const {
    data: movie,
    isLoading,
    isError,
  } = useGetDetailMediaQuery({ mediaType, mediaId });

  if (isLoading) {
    return <Loading />;
  }

  console.log(movie);

  return (
    <div className="relative border-[0.1px] h-[150vh] border-white">
      <div className="w-full h-full  absolute from-white bg-white/50 dark:bg-black/70"></div>
      <img
        src={tmdbConfigs.backdropPath(
          movie?.backdrop_path || movie?.poster_path
        )}
        className="text-black  dark:text-white w-full  h-[100%] flex items-center justify-center object-cover object-top"
      />
      <div className="absolute top-24 w-full p-4 flex flex-col-reverse items-center md:flex-row-reverse md:justify-end md:items-start ">
        <div className="flex flex-col w-4/4 md:w-3/4 border-2 border-red-500 mt-8 p-4">
          <h2 className=" text-3xl md:text-4xl text-black dark:text-white  font-bold text-center md:text-start ">
            {movie.name || movie.title}
          </h2>
          <div className="mt-2 mb-8">
            <ul className="flex flex-row justify-end md:justify-start gap-4">
              {movie?.genres.map((genre) => (
                <p className="text-gray-700 dark:text-green-200 text-xs md:text-sm  relative  ">
                  {genre.name}
                </p>
              ))}
            </ul>
          </div>
          <p>{movie.overview}</p>
        </div>

        <img
          src={tmdbConfigs.backdropPath(
            movie?.poster_path || movie?.backdrop_path
          )}
          alt={movie.title}
          className="object-fill h-full rounded-lg border-transparent w-56 md:w-96  shadow-sm shadow-dark mt-6 "
        />
        <div></div>
      </div>
    </div>
  );
};
