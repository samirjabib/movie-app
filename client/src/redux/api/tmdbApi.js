import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const tmdbApi = createApi({

    reducerPath:'tmdb',


    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:9000/api/v1"
    }),

    endpoints:(builder) => ({

        getMovies: builder.query({
            query: (mediaCategory, mediaType, page) => `${mediaType}/${mediaCategory}?page=${page}`
        })

    })

})

export const { useGetMoviesQuery } = tmdbApi