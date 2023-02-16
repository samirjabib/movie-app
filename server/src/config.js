require('dotenv').config()


const config = {
    port:process.env.PORT || 9000,
    nodeEnv:process.env.NODE_ENV || 'development', //Desarrollo , Testing , Produccion
    db:{
        host:process.env.DB_HOST,
        username: process.env.DB_USER,
        password:process.env.DB_PASS,
        dbName:process.env.DB_NAME,
    },
    JWT_SECRET:process.env.JWT_SECRET,
    TMBD_URL:process.env.TMDB_URL,
    TMDB_TOKEN:process.env.TMDB_TOKEN,
    TMDB_KEY:process.env.TMDB_KEY,
    DB_URI:process.env.DB_URI
}


module.exports = { config }

