import { CardItem } from "../../../components/CardItem";
import { Loading } from "../../../components/Loading/Loading";
import { Pagination } from "../../../components";
import { usePagination } from "../../../hooks";
import { useGetPopularMoviesQuery } from "../../../redux";
import { useCategory } from "../hooks";
import { useEffect } from "react";

export const MediaList = ({ mediaType, title }) => {
  const { page, setPage } = usePagination();
  const { mediaCategory, setCategory } = useCategory();
  const { data, isLoading, isError } = useGetPopularMoviesQuery({
    mediaType,
    mediaCategory,
    page,
  });

  const response = data?.response;
  const mediaList = response?.results;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" container mx-auto relative top-32">
      <div className="flex justify-between w-full items-center mb-4 flex-col md:flex-row ">
        <h2 className="uppercase relative bottom-8 md:bottom-0 text-2xl text-black dark:text-green-200 font-semibold  md:mb-0">
          {title}
        </h2>
        <div className="flex flex-row gap-2 ">
          <button
            className={`text-black dark:text-white px-6 py-2 rounded-md uppercase transition-all duration-200 ${
              mediaCategory === "popular" ? "bg-green-500" : "bg-transparent"
            } `}
            onClick={setCategory}
          >
            popular
          </button>
          <button
            onClick={setCategory}
            className={`text-black dark:text-white px-6 py-2 rounded-md uppercase transition-all duration-200 ${
              mediaCategory === "top_rated" ? "bg-green-500" : "bg-transparent"
            } `}
          >
            top rated
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        {mediaList.map((media) => {
          return (
            <CardItem movie={media} key={media.id} mediaType={mediaType} />
          );
        })}
      </div>
      <div className="w-full mx-auto mb-4">
          <Pagination
            page={page}
            totalPages={response?.total_pages}
            setPage={setPage}
          />
        </div>
    </div>
  );
};
