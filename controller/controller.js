    
const axios = require("axios");
const { Pool, Client } = require('pg')
const db = require('../models')

module.exports = {
    
    get_articles: function( req, res ){

        const pool = new Pool({
            user: 'postgres',
            host: '134.209.110.3',
            database: 'articles',
            password: 'root',
            port: 5432,
          })
          
          pool.query('SELECT * FROM "Entries"', (err, qres) => {
            res.send(qres)
            pool.end()
          })
    }
}