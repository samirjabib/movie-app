const tmbdbConfig = require('./tmdb.config')

const tmdbEndPoints = {
    mediaList : ({ mediaType, mediaCategory, page}) => tmbdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, {page}
    )
}


module.exports = { tmdbEndPoints }