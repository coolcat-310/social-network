const array1 = [ 1,2,3,5];

// const reducer = (acc, currentValue) => acc + (currentValue * currentValue);
//
// console.log(array1.reduce(reducer, 5));

const insert = (arr, el, index) =>{
    if(index< arr.length) {
        return arr.reduce( (acc, cv, li) => li === index ? [...acc, el, cv] : [...acc, cv], [] );
    }
    return [...arr, el];
};

const ans = insert(array1, 4, 3);

console.log(ans === array1);
console.log(ans);

const ans2 = insert([1,2,3], 4, 3);
console.log(ans2);