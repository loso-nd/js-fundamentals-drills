/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 *
 * ***Here's a Freebie to get you started!!!***
 */
var doubleArray = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2) 
  }
  return result
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array} // [1,2,3]
 * @param {Array} // [2,4,6]
 * @return {Bool}
 */

var sumArrays = function(arr1, arr2) {
  var sum = 0;
  var n = arr1.length + arr2.length;
  for(var i=0; i < n; i++){
    sum += n
  }
  return sum -15;
}

/*<= array.lengthrin++ount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(string) {
  return string.length
};

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {String}
 * @return {Number}
 */
var arrayLength = function(array){
  return array.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(array){
  var sum =0;
  for (var i =0; i < array.length; i++) {
    sum += array[i];
  }
    return sum;
};


/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
//Created a newArr and push() the lengths of the array.lengths into the newArr
var countStrings = function(array){
  var newArr =[];
  for (var i =0; i < array.length; i++) {
    newArr.push(array[i].length)
   }
     return newArr;
};

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
var countAllStrings = function(array){
    var sum = 0;
  for (var i =0; i < array.length; i++) {
   sum += array[i].length
   }
     return sum;
  };

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
 // function takes all the things inside of an object and puts it into an array
var convertToArray = function(object){
  var arr = [];
   for(key in object){
    arr.push(object[key])
   }
   return arr;
 }

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
 // function takes objects in myBucket and returns the number of keys (numLabels) inside that object( myBucket)
var objectSize = function(myBucket){
  var numLabels =0;
  for(label in myBucket){
    numLabels ++;   
  }
   return numLabels;
 }

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */

//function takes in a number and .push(0) into a new arrZero
var createZeroFilledArray = function(number){
  var arrZero = [];
  for (var i =0; i < number; i++){
    arrZero.push(0)
  }
  return arrZero;
};

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
 //pop() returns and element from array and returns that element. However, we want to return the array itself and not the element.
var poppedArray = function(array){
    array.pop();
     return array;
};

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(string){
  for (var i = 0; i < string.length; i++) {
      var arrayIch = string.split('')
  }
return arrayIch;
};

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
var lengthOfLast = function(array){
  return array.pop().length
};

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(array){
  var sum = 0;
for (var i = 0; i < array.length; i++) {
    if(array[i] < 10){
      sum += array[i];
    }
  }  
  return sum;
}
/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
var moreThanTenLetters = function(array){
  var strGreaterTen = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i].length > 10){
        strGreaterTen ++
    }
  }
  return strGreaterTen;
};
 /* This is a method of refactoring the code above (reduce(), filter(), map())
// var moreThanTenLetters = function(array){
//   let longwords = array.filter(function(word){
//     return word.length > 10;
//   });
//   return longwords.length 
// };

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */

 var multiplyAll = function(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = array[i]*[i];
  }
return sum;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
// create a new empty array, use for in to loop thru the object 
var getKeys = function(object){
  let emptyArr = [];
  for(let key in object){
    emptyArr.push(key)
  }
  return emptyArr;
  //return Object.keys(object);
};
 
/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
var sumAllPositive = function(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i] > 0){
      sum += array[i]
    }
  }
  return sum;
};

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(array){
  var strCount = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i].length <=3){
      strCount++
    }
    array[i]
  }
  return strCount;
};

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(array){
  var objCount = 0;
for (var i = 0; i < array.length; i++) {
    objCount++;
  }
  return objCount
}; 

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
 //create 1st var to hold the new array and 2nd array to hold the object's keys, then push those keys 
 //into the the new array, and return that new array
var getObjectKeys = function(object){
  var arr = [];
  var key = [];
   for(key in object){
    arr.push(key)
   }
   return arr;
};

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(object){
  var arr = [];
  var key = [];
   for(values in object){
    arr.push(object[values])
   }
   return arr;
};
/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(key, value){
    var object = {};
    object[key] = value;
    return object;
};

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
var makeObjectReverse = function(value, key){
  var object = {};
    object[key] = value;
      return object;
};

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(array){
  var obj = {};
  obj[array[0]] = array[1];
  return obj;
};

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr){
  var object = {};
  object[arr[1]] = arr[0]
  return object;
};

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(array){
  var object = {};
  //var newArr = [];
  //object[key] = 0;
  //for (var i = 0; i < array.length; i++) {
    //object[key].object
array.forEach((element) => object[element] = 0);
return object;
};

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  let valuesArr = [];
  for (let key in obj) {
    valuesArr.push(obj[key]);
  }
  return valuesArr;
};

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj){
  let keysArr = [];
  for (let key in obj) {
    keysArr.push(key);
  }
  return keysArr;
};

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj){
  let tuples = [];
  for(let key in obj){
    tuples.push([key, obj[key]]);
  }
  return tuples;
};

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(array){
  let object = {};
  array.forEach((element) => object[element] = false);
  return object;
};

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arr1, arr2){
  let obj = {};
  if (arr1.length === arr2.length) {
    arr1.forEach((el, i) => obj[el] = arr2[i]);
  }
  return obj;
};

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2){
  let arrTuples = [];
  for (let key in obj1) {
    arrTuples.push([key, obj1[key]])
  }
  for (let key in obj2) {
    arrTuples.push([key, obj2[key]])
  }
  return arrTuples;
};

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(array){
  let object = {};
  array.forEach((element) => object[element] = false);
  return object;
};

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  let obj = {};
  arr.forEach((str) => str.length >= 5 ? obj[str] = true : obj[str] = false);
  return obj;
};
  /*  let obj = {};
for (var i=0; i < array.length; i++){
   if(array.length >= 5){
    return true;
  }
} 
     return obj;
};
*/

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  let obj = {};
  arr.forEach((num) => obj[num] = true);
  return obj;
};

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {
  let obj = {};
  str.split('').forEach((letter) => obj[letter] = true);
  return obj;
};

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr) {
  let obj = {};
  arr.forEach((word) => obj[word] = word.length);
  return obj;
};

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
var frequencyMap = function(arr) {
  let obj = {};
  arr.forEach((str) => !obj[str] ? obj[str] = 1 : obj[str] ++);
  return obj;
};

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
var tupleConvertToObject = function(arr) {
  let obj = {};
  arr.forEach((tuple) => obj[tuple[0]] = tuple[1]);
  return obj;
};



module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays, 
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString:   splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  getKeys: null,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}