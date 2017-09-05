const $ = require('jquery')
const baseUrl = 'https://wordwatch-api.herokuapp.com/api/v1'
const wordWatchApi = require ('./word-watch-api')
const wordWatch = require('./word-watch')


document.addEventListener("DOMContentLoaded", () => {

  $(function() {
    wordWatchApi.getTopWord().then(function(response) {
      const word = Object.keys(response.word)[0]
      const value = Object.values(response.word)[0]
      $('h3').replaceWith('<h3>Top word from Word Watch API: ' + word + '(' + value + ')</h3>')
    })
  })
})
