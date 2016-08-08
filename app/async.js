exports = typeof window === 'undefined' ? global : window;

// var http = require('http');

exports.asyncAnswers = {
  async: function(value) {
  	return new Promise(function(resolve, reject){
  		if(value){
  			resolve(value)
  		}else{
  			reject(value)
  		}
  	})
  },

  manipulateRemoteData: function(url) {

	return $.get(url).then(function(data){
  		//pull out names
  		var names = data.people.map((item)=>{
  			return item.name;
  		})
  		//sort names
  		names.sort();
  		//return to use in promise		
  		return names;
  	});
 	
 //  	return $.ajax({
	//     type: "GET",
	//     url: url 	
	// })
	// .then(function(data){
	// 	var names = data.people.map((item)=>{
 //   			return item.name;
 // 		})
 // 		names.sort();
 // 		return names;
	// })
	
   }
};