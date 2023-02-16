import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const tmdbApi = createApi({

    reducerPath:'tmdb',


    baseQuery: fetchBaseQuery({
        baseUrl:"https://backed-movie-app.up.railway.app/api/v1"
    }),

    endpoints:(builder) => ({

        getPopularMovies: builder.query({
            query: ({ mediaCategory, mediaType, page }) => `/${mediaType}/${mediaCategory}?page=${page}`
        }),

        getCategoriesMovies : builder.query({
            query: ({ mediaType }) => `/${mediaType}/genres`
        }),
        getDetailMedia : builder.query({
            query: ({ mediaType, mediaId }) => `/${mediaType}/${mediaId}`

        })

    })

})

export const { useGetPopularMoviesQuery, useGetCategoriesMoviesQuery, useGetDetailMediaQuery} = tmdbApi