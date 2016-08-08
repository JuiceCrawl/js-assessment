exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(str2){
      return `${str}, ${str2}`;
    }
  },

  makeClosures: function(arr, fn) {
    let funcs =[];
    arr.forEach((item)=>{
      funcs.push(function(){
        return fn(item);
      })
    })
    return funcs;
  },

  partial: function(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  },

  useArguments: function() {
    let args = [].slice.call(arguments);
    return args.reduce((previousValue, currentValue) =>{
      return previousValue + currentValue;
    })
  },

  callIt: function(fn) {
    let args = [].slice.call(arguments);
    args.shift(); //remove the function from array
    fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    let totalArgs, args = [].slice.call(arguments);
    args.shift(); //remove the function from array
   
    return function(){
      let args2 = [].slice.call(arguments);
      totalArgs = args.concat(args2)

      return fn.apply(this, totalArgs)
    }
  },

  curryIt: function(fn) {
    originalArgsLength = fn.length;
    
    function resolver() {
      let memory = [].slice.call(arguments);
        
      return function() {
          let args = [].slice.call(arguments);
          let copy = memory.concat(args);

          if (copy.length >= originalArgsLength){
              return fn.apply(this, copy);
          }
          else {
            return resolver.apply(this, copy);
          }
      };
    };

    return resolver();
  }
};
