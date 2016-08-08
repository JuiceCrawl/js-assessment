exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /[0-1]/.test(str)
  },

  containsRepeatingLetter: function(str) {
    return /([a-z])\1+/i.test(str)
  },

  endsWithVowel: function(str) {
    return /[aeiou]/i.test(str[str.length-1])
  },

  captureThreeNumbers: function(str) {
    var match = str.match(/\d{3}/);
    if(match){
      return match[0]
    }else{
      return false
    } 

  },

  matchesPattern: function(str) {
    return /^(\d{3})-(\d{3})-(\d{4})$/.test(str)
  },

  isUSD: function(str) {
    return /^\$(([1-9]\d{0,2}(,\d{3})*)|(([1-9]\d*)?\d))(\.\d\d)?$/.test(str)
  }
};
