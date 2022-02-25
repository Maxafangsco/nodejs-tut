require('dotenv').config()
const Port = process.env.PORT || 3000;
require('express-async-errors')

const express = require('express')
const app = express();
const connectDB = require('./db/connect')
const productsRouter  = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.json())

//routes
app.get('/', (req,res)=>{
    res.send('<h1>store API</h1> <a href="/api/v1/products"> products routes</a>')
})

app.use('/api/v1/products', productsRouter)

//products routes
app.use(notFoundMiddleware)
app.use(errorMiddleware)



const start = async () =>{
 try {
     //connectDB
     await connectDB(process.env.MONGO_URI)

    app.listen(Port, ()=>{
        console.log(`Server running on port ${Port}`)
    })
 } catch (error) {
    console.log(error)
 }
}

start()