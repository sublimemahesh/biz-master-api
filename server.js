require("dotenv/config")
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const conn = require('./conn')

const app = express()
const apiPort = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

conn.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('bizmaster.io!')
})
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))