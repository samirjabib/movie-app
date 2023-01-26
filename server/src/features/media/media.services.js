const { tmdbApi } = require("../../utils/tmdb/tmdb.api");

const searchMovies = async({ mediaType, query, page }) => {
    
    
    const response = await tmdbApi.mediaList({
        query,
        page,
        mediaType: mediaType === "people" ? "person" : mediaType
    });
    
    return data

}



module.exports = { searchMovies }