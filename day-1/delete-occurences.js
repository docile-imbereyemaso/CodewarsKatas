function deleteNth(arr,n){
  let count ={};
  for(let num of arr){
    count[num] = (count[num]||0)+1;
  }

  const arrayCount =Object.fromEntries(Object.entries(count).map(([keys,value])=>{
    return value >n ?[keys,n]:[keys,value]
  })) ;

  let final =[];

  for(let keys in arrayCount){
    if(arrayCount.hasOwnProperty(keys)){
      let value = arrayCount[keys];
      for(let i=0;i<value;i++){
        final.push(Number(keys))
      }
    }
  }

  return arr
}

console.log(deleteNth([ 20, 37, 21 ], 1))

