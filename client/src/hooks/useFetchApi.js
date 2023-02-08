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

          const { response, error } = await mediaApi.getList({
            mediaType,
            mediaCategory,
            page:1
          });
          console.log(response, 'resposne')
        
          console.log(error)
    
    };

    useEffect( () => {
        getMedias()
    },[])


    return{
        movies,
        gnres
    }
}