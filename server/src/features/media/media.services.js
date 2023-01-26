const { tmdbApi } = require("../../utils/tmdb/tmdb.api");

const searchMovies = async({ mediaType, query, page }) => {
    
    
    const response = await tmdbApi.mediaList({
        query,
        page,
        mediaType: mediaType === "people" ? "person" : mediaType
    });
    
    return data

}


const getList = async({page, mediaType, mediaCategory}) => {

    const response = await tmdbApi.mediaList({page, mediaType, mediaCategory})

    return response
}

const getGneres = async(mediaType) => {

    const data = await tmdbApi.mediaGenres({mediaType})

    return data
}


module.exports = { 
    searchMovies, 
    getList,
    getGneres
}