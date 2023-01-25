require('dotenv').config()
console.log(process.env.DB_NAME) // remove this after you've confirmed it is working

const config = {
    port:process.env.PORT || 9000,
    nodeEnv:process.env.NODE_ENV || 'development', //Desarrollo , Testing , Produccion
    db:{
        host:process.env.DB_HOST,
        username: process.env.DB_USER,
        password:process.env.DB_PASS,
        dbName:process.env.DB_NAME,
    }
}

module.exports = { config }