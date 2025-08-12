function findMissingNumbers(arr){
 const min = Math.min(...arr);
 const max = Math.max(...arr);
 let result =[];
 for(let i=min;i<=max;i++){
 if(!arr.includes(i)){
    result.push(i)
 }
 }

 return result
}

console.log(findMissingNumbers([-3,-2,1,5]));