const $ = require('jquery')
const baseUrl = 'https://wordwatch-api.herokuapp.com/api/v1'

class WordWatchApi {
  static getTopWord() {
    return $.ajax({
      url: baseUrl + '/top_word',
      type: 'GET',
      dataType: 'json',
      error: function(error) {
      }
    }).done(function(post){
      return post
    })
  }

  static postWord(word) {
    return $.ajax({
      url: baseUrl + '/words',
      type: 'POST',
      dataType: 'json',
      data: { word: {value: word} },
      error: function(error) {
      }
    }).done(function(post) {
      return post
    })
  }
}

module.exports = WordWatchApi
