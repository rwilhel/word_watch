const $ = require('jquery')
const WordWatchAPI = require('./word-watch-api')


class WordWatch {

  static allFunctions(words) {
    WordWatch.sendWords(words)
    WordWatch.updateField()
  }

  static sendWords(words) {
    words.forEach(function(word) {
      var estWord = word.replace(/['"]+/g, '')
      WordWatchAPI.postWord(estWord)
    })
  }

  static wordCount(words) {
    const count = {}
    for (var i = 0; i < words.length; i++) {
      var num = words[i].toLowerCase()
      count[num] = count[num] ? count[num] + 1 : 1
    }
    Word.formatCount(count)
  }

  static formatCount(count) {
    const countKeys = Object.keys(count)
    const countedWords = []
    var i
    for (i in countKeys) {
      countedWords.push([countKeys[i], count[countKeys[i]]])
    }
    countedWords.forEach(function(word) {
      Word.addToDoc(word)
    })
  }

  static addToDoc(word) {
    $('.word-count').append('<span style=font-size:' + word[1] + 'em>' + word[0] + '</span>')
  }

  static updateField() {
    $('textarea').val('')
  }
}

module.exports = WordWatch
