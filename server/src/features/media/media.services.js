const { tmdbApi } = require("../../utils/tmdb/tmdb.api");
const { Reviews  } = require("../../models/sql/review.model")
const { Users } = require("../../models/sql/user.model")
const { Favorites } = require("../../models/sql/favorite.model")




const searchMovies = async({ mediaType, query, page }) => {
    
    
    const response = await tmdbApi.mediaList({
        query,
        page,
        mediaType: mediaType === "people" ? "person" : mediaType
    });
    
    return response

}


const getList = async({page, mediaType, mediaCategory}) => {
    const response = await tmdbApi.mediaList({page, mediaType, mediaCategory})

    return response
}

const getGenres = async( {mediaType }) => {


    const data = await tmdbApi.mediaGenres( { mediaType })
    
    return data
}

const getDetails = async(mediaType, mediaId, user) => {
    const params = { mediaType, mediaId };


    //Media
    const media = await tmdbApi.mediaDetail(params)
    media.credits = await tmdbApi.mediaCredits(params)

    //videos
    const videos = await tmdbApi.mediaVideos(params)
    media.videos = videos;

    //recommend
    const recommend = await tmdbApi.mediaRecommend(params)
    media.recommend = recommend.results

    //images
    media.images = await tmdbApi.mediaImages(params)

    //Favorites
    // if(user){
    //     const isFavorite = await Favorites.findOne({ user: user.id, mediaId})
    //     media.isFavorite = isFavorite !== null;
    // }


    //Reviews
    // media.reviews = await Reviews.findAll({
    //     where:mediaId,
    //     include:[{
    //         model:Users,
    //         attributes:['createdAt']
    //     }]
    // })

    

    return media
}


module.exports = { 
    searchMovies, 
    getList,
    getGenres,
    getDetails
}