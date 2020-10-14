const axios = require('axios')

// search
const fetchMoviesByKeyword = (keyword) =>
  axios({
    'method': 'GET',
    'url': 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    'headers': {
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
      'x-rapidapi-key': '06e1525424msh84ba94dea49394bp108e99jsn68041784006f',
      'useQueryString': true
    },
    'params': {
      'page': '1',
      'r': 'json',
      's': keyword
    }
  })


// // by id && title
// axios({
//     "method": "GET",
//     "url": "https://movie-database-imdb-alternative.p.rapidapi.com/",
//     "headers": {
//       { movies: data }
//       "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//       "x-rapidapi-key": "06e1525424msh84ba94dea49394bp108e99jsn68041784006f",
//       "useQueryString": true
//     },
//     "params": {
//       "i": "tt4154796",
//       "r": "json"
//     }
//   })
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//   })

module.exports = { fetchMoviesByKeyword }
