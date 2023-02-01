const { config } = require("../../config");

const baseUrl = config.TMBD_URL;
const key = config.TMDB_KEY;





const getUrl = (endpoint, params) => {
    // const qs = new URLSearchParams(params) //crear una instancia de url search nos permite manipular los parametros de una url con diferentes metodos.  
    // console.log(endpoint, console.log('this is a enpoint'))
    console.log(key)

    // return `${baseUrl}${endpoint}?apikey=${key}&${qs}`

}

module.exports = { getUrl }


