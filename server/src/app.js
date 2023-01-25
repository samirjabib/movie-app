const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const http = require("http");


const { db } = require("./utils/database");
const { initModels } = require("./models/initModels");
const { config } = require("./config");
const { mainRouter } = require("./router/main.router");
const { AppError } = require("./helpers/appError")
const {  globalErrorHandler } = require("./helpers/globalErrorHandler")
const { StatusCodes } = require('http-status-codes')

const app = express();


db.authenticate()
    .then( () => {
        console.log('database authenticated')
    })
    .catch( err => {
        console.log(err)
    })

db.sync( 
    // {force:true}
)
    .then( () => {
        console.log('db has sync')
    })
    .catch( err => {
        console.log(err)
    })

initModels()


app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${config.port}/api/v1/`
    })
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended:false})) //Analiza las request con cargas utiles
app.use(cookieParser()) //Manejo de cookies

// const server = http.createServer(app) //Crear server web node


app.use('/api/v1', mainRouter)

// Error endpoint not found
app.all('*', (req, res, next) => {
    return next(new AppError(
      `${req.method} ${req.url} not found in this server`,
      StatusCodes.NOT_FOUND,
      true
    ))
  })


// Global error Handler
app.use('*', globalErrorHandler)


app.listen( config.port ,() => {
    console.log(`server run on port ${config.port}`)
})