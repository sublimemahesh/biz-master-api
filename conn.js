const mongoose = require('mongoose')
require("dotenv/config")
 
let mongodb_url_local = `${process.env.DB_CON_LOCAL}/${process.env.DB_NAME_LOCAL}`
let mongodb_url_prod = `${process.env.DB_CON_PROD}/${process.env.DB_NAME_PROD}`
 
mongoose.connect(mongodb_url_local, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true  
    },() => console.log("connected to DB")) 

const conn = mongoose.connection

module.exports = conn