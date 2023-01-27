const { tmdbApi } = require('../../utils/tmdb/tmdb.api')


const personDetail = async(personId) => {

    const person = await tmdbApi.personDetail(personId)

    return person

}


const personMedias = async(personId) => {
    
    const medias = await tmdbApi.personMedias(personId)

    return medias
}





module.exports = {
    personDetail,
    personMedias
}