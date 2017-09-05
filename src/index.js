const $ = requre('jquery')
const baseUrl = 'https://wordwatch-api.herokuapp.com/api/v1'
const wordWatchApi = require ('./word-watch-api')
const wordWatch = require('./word-watch')


document.addEventListener("DOMContentLoaded", () => {

  $(function() => {
    wordWatchApi.getTopWord()
  })
})
