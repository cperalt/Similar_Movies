const express = require('express')
const router = express.Router()
const url = require('url')

require('dotenv').config()

apiKey = process.env.API_KEY;
apiToken = process.env.API_TOKEN;

const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb(`${apiKey}`)

const searchMovie = async (title) => {
    try {
        const res = await moviedb.searchMovie(title);
        const id = res.results[0].id;
        // console.log(id);
        return id;
    } catch (error) {
        console.error('Error: ', error);
    }
}


const movieSimilar = async (id) => {
    try {
        const res = await moviedb.movieSimilar(id)
        const movies = res;
        // console.log(res)
        return movies.results;
    } catch (error) {
        console.error('Error: ', error);
    }
}

router.get("/", async (req, res) => {
    try {
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query,
        })
        console.log(params.get('movie'))
        const id = await searchMovie(params.get('movie'));
        const movies = await movieSimilar(id);
        res.json(movies) 
    } catch (error) {
        res.status(500).json({error})
        
    }
})

module.exports = router
