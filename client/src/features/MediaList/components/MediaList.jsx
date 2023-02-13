import { CardItem } from "../../../components/CardItem"
import { Loading } from "../../../components/Loading/Loading"
import { useGetPopularMoviesQuery  } from "../../../redux"
import { useCategory } from "../hooks"

export const MediaList = ({mediaType, title}) => {
    
    const { mediaCategory, setCategory } = useCategory()
    console.log(mediaCategory)
    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType , mediaCategory, page:1 })


    if(isLoading){
        return <Loading/>
    }

    const response = data?.response
    const mediaList = response?.results

    return(
        <div className=" container mx-auto relative top-32">
            <div className="flex justify-between w-full items-center mb-4">
                <h2
                    className="uppercase text-2xl text-black dark:text-green-200 font-semibold"
                >
                    {title}
                </h2>
                <div className="flex flex-row gap-2 ">
                    <button
                        className={`text-black dark:text-white px-6 py-2 rounded-md uppercase transition-all ${(mediaCategory === "popular") ? 'bg-green-500' : 'bg-transparent'} `}
                        onClick={setCategory}
                    >
                        popular
                    </button>
                    <button
                        onClick={setCategory}
                        className={`text-black dark:text-white px-6 py-2 rounded-md uppercase transition-all ${(mediaCategory === "top_rated") ? 'bg-green-500' : 'bg-transparent'} `}

                    >
                        top rated
                    </button>
                </div>
            </div>
            <div
                 className="grid grid-cols-4 "    
            >
                {
                    mediaList.map( media => {
                        return(
                        
                                <CardItem movie={media} key={media.id}/>
                        )
                    })
                }
            </div>
         
        </div>
    )
}