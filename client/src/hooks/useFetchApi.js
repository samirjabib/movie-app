import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    tmdbConfigs,
    mediaApi, 
    genreApi
} from '../api'


export const useFetchApi = ({  mediaType, mediaCategory}) => {

    const dispatch = useDispatch()
    
    const [ movies, setMovies ] = useState()
    const [ gnres, setGenres ] = useState()

    console.log(movies)
    console.log(gnres)

    const getMedias = async () => {
        const { response, err } = await mediaApi.getList({
          mediaType,
          mediaCategory,
          page: 1
        });
  
        if (response) setMovies(response.results);
        // if (err) toast.error(err.message);
        // dispatch(setGlobalLoading(false));
      };

      const getGenres = async () => {
        // dispatch(setGlobalLoading(true));
        const { response, err } = await genreApi.getList({ mediaType });
  
        if (response) {
          setGenres(response.genres);
          getMedias();
        }
        if (err) {
          // toast.error(err.message);
          // setGlobalLoading(false);
        }
      };
      
    useEffect( () => {
        getMedias()
    },[mediaType, mediaCategory, dispatch])
  
    useEffect(() => {
        getGenres();
      }, [mediaType, dispatch]);
    

    return{
        movies,
        gnres
    }
}