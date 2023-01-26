const tmdbConfig = require('./tmdb.config')

const tmdbEndPoints = {
    mediaList : ({ mediaType, mediaCategory, page}) => tmbdbConfig.getUrl(
        `${mediaType}/${mediaCategory}`, {page}
    ),
    mediaDetail:({mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}`
    ),
    mediaGenres: ({ mediaType }) => tmdbConfig.getUrl(
        `genre/${mediaType}/list`
    ),
    mediaCredits:({ mediaType, mediaId}) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/credits`
    ),
    mediaVideos: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/videos`
    ),
    mediaRecommend: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
    `${mediaType}/${mediaId}/recommendations`
    ),
    mediaImages: ({ mediaType, mediaId }) => tmdbConfig.getUrl(
        `${mediaType}/${mediaId}/images`
    ),
    mediaSearch: ({ mediaType, query, page }) => tmdbConfig.getUrl(
        `search/${mediaType}`, { query, page }
    ),
    personDetail: ({ personId }) => tmdbConfig.getUrl(
        `person/${personId}`
    ),
    personMedias: ({ personId }) => tmdbConfig.getUrl(
        `person/${personId}/combined_credits`
    ),
    mediaSearch: ({ mediaType, query, page}) => tmbdbConfig.getUrl(
        `search/${mediaType}`, { query, page }
    )
}


module.exports = { tmdbEndPoints }