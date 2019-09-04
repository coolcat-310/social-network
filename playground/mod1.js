// Write a function that adds all numbers from 1 to the number passed
const sumRange = num =>{
    if(num === 1){
        return 1
    }else{
        return num + sumRange(num - 1);
    }
};

//console.log(sumRange(3));

//power function tains in a base and an exponent. if the exponent is 0 return 1.
const power = (base, exponent) =>{
  if(exponent === 0){
      return 1
  }else{
      return base * power(base, exponent - 1 )
  }
};

//console.log(power(2,10));
// write a function called all which accepts an array and a callback and return true if every value isn the
// array return true when passed as parameter to the callback function

const all = (arr, callback) =>{
    if(arr.length === 0)
        return true;

    if(callback(arr[0])){
        return all(arr.slice(1), callback)
    }else{
        return false
    }
};
const all2 = (arr, callback) =>{
    return arr.every(callback);
};

var allAreLessThanSeven = all([1,2,9], function(num){
    return num < 7;
});
var allAreLessThanSevenb = all2([1,2,9], function(num){
    return num < 7;
});


var allAreLessThanSeven2 = all([1,2,6], function(num){
    return num < 7;
});
var allAreLessThanSeven2b = all2([1,2,6], function(num){
    return num < 7;
});
//console.log(allAreLessThanSeven);
//console.log(allAreLessThanSeven2);
//console.log(allAreLessThanSevenb);
//console.log(allAreLessThanSeven2b);

//write a function called productofArray which takes in an array of numbers and returns the product of them all

//option 1
const productOfArray = arr =>{
    if(arr.length === 1){
        return arr[0]
    }else{
        return arr[0] * productOfArray(arr.slice(1));
    }
};
//option2
const mult = (a,b) => a* b;
const product = arr => arr.reduce(mult);

//console.log(productOfArray([1,2,3,10]));
//console.log(product([1,2,3,10]));

// Write a function called contains that searches for a value in a nested object. return s true if the object
// contains that value.

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
};

const contains = (obj, value) =>{
    for (let key in obj){
        if(obj[key] === value){
            return true;
        }

        if(typeof obj[key] === 'object'){
            return contains(obj[key], value)
        }
    }
    return false;
};

let hasIt = contains(nestedObject, 44);
let doesntHaveIt = contains(nestedObject, "foo");
//console.log(hasIt, doesntHaveIt);


// Given a multi-dimensional integer array, return the toal number of integers stored inside this array
const totalIntegers = arr =>{
    let total = 0;
    if(arr.length === 0){
        return 0
    }
    const firstElement = arr.shift();

    // check if a number
    if(Number.isInteger(firstElement)){
        total += 1;
    }else if(Array.isArray(firstElement)){
        total += totalIntegers(firstElement);
    }
    return total + totalIntegers(arr);
};

const totalInt = arr =>{
    let total = 0;
    arr.forEach( i => {
        total += Number.isInteger(i) ? 1 : Array.isArray(i) ? totalInt(i) : 0;
    });
    return total;
};
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
var sevenb = totalInt([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]);
//console.log(seven, sevenb);

//write a function that sums squares of number in list that may contain more list;
const sumSquares = arr => {
    let total = 0;
    arr.forEach(i =>{
        total += Number.isInteger(i) ? Math.pow(i, 2): Array.isArray(i) ? sumSquares(i): 0;
    });
    return total;
};
// var l = [1,2,3];
// console.log(sumSquares(l));
//
// l = [[1,2],3];
// console.log(sumSquares(l));
//
// l = [[[[[[[[[1]]]]]]]]]
// console.log(sumSquares(l));
//
// l = [10,[[10],10],[10]];
// console.log(sumSquares(l));

// The function should return an array containing repetitions of the number argument. For instance, replicate(3,5)
// should return [5, 5, 5]. If the time argument is negative, return an empty array.

const replicate = (times,num) =>{
    if(times <= 0){
        return [];
    }
    return [num].concat(replicate(times - 1, num))
};

console.log(replicate(3, 5));
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []