const fetch = require('node-fetch')

const {KEY} = require('./hide');

const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${KEY}`

fetch(url).then(response =>response.json()).then(result=> console.log(result))

// Parameters
    // q
        // query
    // fq
        //
    // begin_date
    // end_date