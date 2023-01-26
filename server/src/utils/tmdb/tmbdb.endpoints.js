const tmbdbConfig = require('./tmdb.config')

const tmdbEndPoints = {
    mediaList : ({ mediaType, mediaCategory, page}) => tmbdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, {page}
    ),
    mediaSearch: ({ mediaType, query, page}) => tmbdbConfig.getUrl(
        `search/${mediaType}`, { query, page }
    )
}


module.exports = { tmdbEndPoints }