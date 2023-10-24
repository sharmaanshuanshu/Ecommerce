const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = 5500

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));

// connect to the mongodb database
connectDB()

const itemRoutes = require('./routes/items')
const PaymentRoutes = require('./routes/payment')


app.use('/api/items', itemRoutes)
app.use('/api/payment', cors(), PaymentRoutes);


app.listen(PORT, console.log("Server is running on port ", PORT))