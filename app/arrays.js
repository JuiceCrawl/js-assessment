exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    let sum = 0;
    arr.forEach((item) => {
      sum += item
    })
    return sum;
  },

  remove: function(arr, item) {
    let newArr = [];
    arr.forEach((num) => {
      if(num !== item){
        newArr.push(num)
      }
    })
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item){
        arr.splice(i,1)
        i-- //reset i after subtracting arr length
      }
    }
    return arr
  },

  append: function(arr, item) {
    arr.push(item)
    return arr;
  },

  truncate: function(arr) {
    arr.pop()
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item)
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr;
  },

  count: function(arr, item) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === item)
        sum++;
    }
    return sum;
  },

  duplicates: function(arr) {
    let dup = [];
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i-1]){ //found a duplicate
        if(dup.indexOf(arr[i]) === -1){ // not stored yet
          dup.push(arr[i])
        }
      }
    }
    return dup;
  },

  square: function(arr) {
    return arr.map((num)=>{
      return num * num
    })
  },

  findAllOccurrences: function(arr, target) {
    let indices = [];
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
        indices.push(i)
      }
    }
    return indices;
  }
};
