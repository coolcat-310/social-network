// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 2));
// console.log("0 && 1 = "+(0 && 1));
// console.log("1 && 2 = "+(1 && 2));

// console.log(false == '0')
// console.log(false === '0')

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity(){
//         return this._name;
//     }
// };
//
// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
//
// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// var length = 10;
// function fn() {
//     console.log(this.length);
// }
//
// var obj = {
//     length: 5,
//     method: function(fn) {
//         fn();
//         arguments[0]();
//     }
// };
//
// obj.method(fn, 1);

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ()

// var obj = {a: 1, b: 2};
// var objclone = Object.assign({}, obj);
// console.log(objclone);

// for (var i = 0; i < 5; i++) {
//     (x =>{
//         setTimeout(function() { console.log(x); }, x * 1000 );
//     })(i);
// }

// console.log(1<2<3);//true
// console.log(3>2>1); //true>1 => false

var a = [1,2,3];
a[10] = 99;
console.log(a);
