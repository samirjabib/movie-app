const axiosClient = require('../axios.client')
const { tmdbEndPoints } = require('./tmbdb.endpoints')


const tmdbApi = {
    mediaList: async( { mediaType, mediaCategry, page}) =>  await axiosClient.get(
        
    ),
    mediaSearch: async({ mediaType, query, page }) => axiosClient.get(
        tmdbEndPoints.mediaSearch({ mediaType, query, page })
    )
}


module.exports = { tmdbApi }