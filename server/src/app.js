const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const http = require("http")


const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false})) //Analiza las request con cargas utiles
app.use(cookieParser())


const server = http.createServer(app)



app.listen( 3000,() => {
    console.log('server on')
})