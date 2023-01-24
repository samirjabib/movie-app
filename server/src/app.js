const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const http = require("http");
const { db } = require("./utils/database");


const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false})) //Analiza las request con cargas utiles
app.use(cookieParser()) //Manejo de cookies

// const server = http.createServer(app) //Crear server web node


db.authenticate()
    .then( () => {
        console.log('database authenticated')
    })
    .catch( err => {
        console.log(err)
    })

db.sync()
    .then( () => {
        console.log('db sync')
    })
    .catch( err => {
        console.log(err)
    })


app.listen( 3000,() => {
    console.log('server on')
})