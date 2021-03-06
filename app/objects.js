exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
  	var keys = Object.keys(obj)
  	for (var i = 0; i < keys.length; i++) {
  		keys[i] += `: ${obj[keys[i]]}`
  	}
  	return keys;
  }
};
