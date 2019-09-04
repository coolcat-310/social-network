const original = ['a', 'b', 'c'];

//method 1
const rev1 = [...original].reverse();
console.log(rev1);

//method 2
const rev2 = original.reduceRight((acc,current)=> [...acc, current]);
console.log(rev2);

const rev3 = original.reduceRight((acc, current) => {
    acc.push(current);
    return acc;
},[]);
console.log(rev3);

const rev4 = original.reduce((acc, current) =>[current, ...acc]);
console.log(rev4);

console.log(original);