exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	let newStr = '', temp = '';
  	
  	for (var i = 0; i < str.length; i++) {
  		
  		if(str[i] !== newStr[newStr.length-1]){
  			temp = str[i]
  			
  			if(str[i+1] !== str[i]){
  				newStr += temp
  			}else{
  				while(temp.length < amount && str[i+1] === str[i]){
  						temp += str[i+1]
  						newStr += temp
  						i++
  					
  				}
  			}
  		}
  	}

  	return newStr;

  },

  wordWrap: function(str, cols) {
  	let words = str.split(' '),
  		arr = [],
  		temp = '';
  	
	for(var i = 0; i < words.length; i++){
		if (words[i].length >= cols){
  			arr.push(words[i] += '\n')
  		
  		}else {
  			temp += words[i]
  			while(temp.length < cols){
  				if((temp + ` ${words[++i]}`).length <= cols){
  					temp += ` ${words[i]}`
  				}else{
  					i--
  					break;
  				}
  			}
  			if(i === words.length-1){
  				arr.push(temp)
  			}else{
  				arr.push(temp += '\n')
  			}
  			
  			temp = ''
  		}
	}
  	
  return arr.join('')
  },

  reverseString: function(str) {
  	return str.split('').reverse().join('');
  }
};
