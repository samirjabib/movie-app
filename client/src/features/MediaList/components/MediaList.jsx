import { useGetPopularMoviesQuery  } from "../../../redux"
import { useCategory } from "../hooks"

export const MediaList = ({mediaType, title}) => {
    
    const { mediaCategory, setCategory} = useCategory()
    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType , mediaCategory, page:1 })
    console.log(data)


    return(
        <div className=" container mx-auto mt-12">
            <div className="flex justify-between w-full">
                <h2
                    className="uppercase text-lg text-black dark:text-white font-semibold"
                >
                    {title}
                </h2>
                <div className="flex flex-row gap-2 ">
                    <button
                        className="text-black dark:text-white bg-green-500 px-6 py-2 rounded-md uppercase"
                        onClick={setCategory}
                    >
                        popular
                    </button>
                    <button
                        onClick={setCategory}
                        className="text-black dark:text-white bg-green-500 px-6 py-2 rounded-md uppercase"

                    >
                        top rated
                    </button>

                </div>
            </div>
        </div>
    )
}