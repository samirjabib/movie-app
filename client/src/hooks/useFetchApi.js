import axios from 'axios'
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
    console.log(movies)
    const [ gnres, setGenres ] = useState()

    const getMedias = async () => {

          const { response, error } = await mediaApi.getList({
            mediaType,
            mediaCategory,
            page:1
          });

          setMovies(response.response)
          
    };

    useEffect( () => {
        getMedias()
    },[])


    return{
        movies,
        gnres
    }
}