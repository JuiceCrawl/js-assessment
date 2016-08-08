exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {
  	 let decimal = 0;
        for (let i = 0; i < str.length; i++) {
            decimal *= 2;
            decimal += Number(str[i]);
        }
        return decimal;
  },

  convertToBinary: function(num) {
  	 if (!num) return "";
        return numbersAnswers.convertToBinary(Math.floor(num/2)) + num % 2;  
  },

  multiply: function(a, b) {
  	return (a * 10) * (b * 10) / (100);
  }
};
