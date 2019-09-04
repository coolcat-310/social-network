const asc = (a,b) => a - b; //for asc
const desc = (a,b)=> b-a;

const arr = [1,2,30, 4];

const res = arr.sort(asc);
console.log(res);

const rev = arr.sort(desc);
console.log(rev);