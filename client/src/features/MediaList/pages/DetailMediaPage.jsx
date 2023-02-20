import { useParams } from "react-router"

export const DetailMediaPage = () => {
    const { mediaType, id  } = useParams()
    console.log(id)

    return(
        <div>
            Hola
        </div>
    )
}