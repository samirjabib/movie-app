import publicClient from "../client/public.client";


const genreEndPoints = {
    list : ({ mediaType }) =>  `${mediaType}/genre` 
}

export const genreApi = {
     getList: async({ mediaType }) => {
            try {
                const response = await publicClient.get(genreEndPoints.list({ mediaType }))

                return response
            } catch (error) {
                return {
                    error
                }
            }
        }
}


