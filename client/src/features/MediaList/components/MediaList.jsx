import { useState } from "react"
import { CardItem } from "../../../components/CardItem"
import { Loading } from "../../../components/Loading/Loading"
import { usePagination } from "../../../hooks"
import { useGetPopularMoviesQuery  } from "../../../redux"
import { useCategory } from "../hooks"

export const MediaList = ({mediaType, title}) => {
    
    const { mediaCategory, setCategory } = useCategory()
    const { data, isLoading, isError } = useGetPopularMoviesQuery({ mediaType , mediaCategory, page:1 })

    const response = data?.response
    const mediaList = response?.results
    console.log(response)



    if(isLoading){
        return <Loading/>
    }


    //Pagination Logic

    const [ page, setPage ] = useState(1)
    const [ itemPerPage, setItemPerPage ] = useState(8)
    const initialItem = 0
    const finalItem =  8





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
                        className={`text-black dark:text-white px-6 py-2 rounded-md uppercase transition-all duration-200 ${(mediaCategory === "popular") ? 'bg-green-500' : 'bg-transparent'} `}
                        onClick={setCategory}
                    >
                        popular
                    </button>
                    <button
                        onClick={setCategory}
                        className={`text-black dark:text-white px-6 py-2 rounded-md uppercase transition-all duration-200 ${(mediaCategory === "top_rated") ? 'bg-green-500' : 'bg-transparent'} `}
                    >
                        top rated
                    </button>
                </div>
            </div>
            <div
                 className="grid grid-cols-4 "    
            >
                {
                    mediaList.slice(initialItem, finalItem ).map( media => {
                        return(
                        
                                <CardItem movie={media} key={media.id}/>
                        )
                    })
                }
            </div>

        </div>
    )
}