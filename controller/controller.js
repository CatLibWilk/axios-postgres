    
const axios = require("axios");
const db = require('../models')
const GKEY = process.env.GOOGLE_APIKEY;


module.exports = {
    
    get_articles: function( req, res ){
        res.send('controller reached')
    }
}