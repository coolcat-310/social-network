

const isSubset = (arr, n, sum) =>{
  //Base cases
  if(sum === 0) return true;

  if(n === 0 && sum !== 0) return false;

  if(arr[n - 1] > sum) return isSubset(arr, n - 1, sum);

  return isSubset(arr, n -1, sum ) || isSubset(arr, n -1, sum - arr[n -1]);


};


const is2Subset = (arr, sum) =>{
    if (sum === 0){
        return true;
    }
    if(arr.length === 0){
        return false;
    }
    if(arr[0]> sum){
        return is2Subset(arr.slice(1), sum);
    }
    const newSum = sum - arr[0];

    return is2Subset(arr.slice(1), sum) || is2Subset(arr.slice(1), newSum);
};

// if(is2Subset([3,34,5,12,4],9)){
// //     console.log('found');
// // }else{
// //     console.log('not found');
// // }

const isTwoSubset = (arr, total) =>{
  let dict = {};

    return arr.reduce((acc, cv) =>{
        if(cv in dict){
            return acc || true;
        }
        const diff = total - cv;
        dict[diff] = diff;
        return acc;
    }, false);
};
// const ans = isTwoSubset([3,34,5,12,4,7],9);
// console.log(ans);
// //     console.log('found');
// // }else{
// //     console.log('not found');
// // }

const isTwoSubsetb = (arr,total) =>{
    console.log(arr.some(num => arr.map(el => total - el).includes(num)));
};
isTwoSubsetb([3,34,5,12,10,7],9);