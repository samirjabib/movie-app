import { useParams } from "react-router";
import { useGetDetailMediaQuery } from "../../../redux/api/tmdbApi";

export const DetailMediaPage = () => {
  const { mediaType, id:mediaId } = useParams();

  

  const { data, isLoading, isError} = useGetDetailMediaQuery({mediaType, mediaId})

  console.log(data)

  return (
    <div className="text-black text-4xl">
        {`Hola soy el ${mediaType}, con el id de ${mediaId}`}
    </div>);
};
