function findUnique(numbers) {
    // Return the unique number
   const countMap = new Map();
    for(let number of numbers){
        const newCount = (countMap.get(number)||0)+1;
        countMap.set(number,newCount);
    }
    let result;
     countMap.forEach((value,key)=>{
        if(value===1){
            result = key
        }
     })
    return result;
}

console.log(findUnique([ 3, 5, 5, 4, 4, 3, 2, 2, 9 ]))