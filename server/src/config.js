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
    TMBD_URL:process.env.TMBD_URL,
    TMDB_TOKEN:process.env.TMDB_TOKEN
}

module.exports = { config }

