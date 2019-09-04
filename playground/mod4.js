// console.log(0.1 + 0.2);
// console.log(0.1 +0.2 == 0.3);
// console.log((0.1 + 0.2) - 0.3 < Number.EPSILON);

const isInteger = x =>{
    return x % 1 === 0 && Number.isInteger(x);
};

//console.log(isInteger(5));

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

const isPalidrome = word =>{
    let w = word.toLowerCase().replace(/\W/g, '');
    return w === w.split('').reverse().join('');
};
//console.log(isPalidrome('A car, a man, a maraca'));

const sum = (x, y) => {
    if( y === undefined){
        return y => x + y;
    }else{
        return x + y
    }
};

// console.log(sum(2,3));
// console.log(sum(2)(3));

var d = {};

['zebra', 'horse'].forEach(function (k) {
    d[k] = undefined
});

//console.log(d);
var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);

//console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
//console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// console.log(1 +  "2" + "2");
// console.log(1 +  +"2" + "2");
// console.log(1 +  -"1" + "2");
// console.log(+"1" +  "1" + "2");
// console.log( "A" - "B" + "2");
// console.log( "A" - "B" + 2);

// var list = readHugeList();
//
// var nextListItem = function() {
//     var item = list.pop();
//
//     if (item) {
//         // process the list item...
//         nextListItem();
//     }
// };

for (var i = 0; i < 5; i++) {
    (x => {
        setTimeout( function () {
            console.log( x );
        }, x * 1000 );
    })(i);
}