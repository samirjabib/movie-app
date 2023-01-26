const axiosClient = require('../axios.client')


const tmdbApi = {
    mediaList: async( { mediaType, mediaCategry, page}) =>  await axiosClient.get(
        
    )
}


module.exports = { tmdbApi }