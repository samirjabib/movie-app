import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    tmdbConfigs,
    mediaApi, 
    genreApi
} from '../api'


export const useFetchApi = ({  mediaType, mediaCategory}) => {
  console.log(mediaType, mediaCategory)

    const dispatch = useDispatch()
    
    const [ movies, setMovies ] = useState()
    const [ gnres, setGenres ] = useState()

    const getMedias = async () => {


      // const { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=c2095bf251c77ded7d39c1c7e317a24f')
      // console.log(data)

        const { response, error } = await mediaApi.getList({
          mediaType,
          mediaCategory,
          page:1
        });
        console.log(response)
    
    };

    useEffect( () => {
        getMedias()
    },[])


    return{
        movies,
        gnres
    }
}