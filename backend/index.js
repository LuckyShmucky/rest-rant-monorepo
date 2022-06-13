// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/places', require('./controllers/places'))
app.use('/users', require('./controllers/users'))


// app.get('/', (req, res) => {
//     res.send('find server')
// })
// Listen for Connections
app.get('/', (req, res) =>{
    try{
        res.status(200).json({
            message: 'welcome to rest-rant home route'
        })
    } catch(err){
        res.status(500).json({
            message: "error"
        })
    }
})

app.get('/users', (req, res) => {
    try{
        res.status(200).json({
            message: "This is the user route"
        })
    } catch(err){
        res.status(500).json({
            message: "error"
        })
    }
})

app.get('*', (req, res) => {
    res.status(404).json({
        message: 'This route does not exist or user input is incorrect'
    })    
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})