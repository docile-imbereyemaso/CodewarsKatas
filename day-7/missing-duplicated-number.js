function solution(array) {
  var missing = 0, duplicate = 0;
  let min = Math.min(...array);
  let max = Math.max(...array)

  for(let i=min;i<=max;i++){
  if(!array.includes(i)){
     missing = i
    
  }
  if(array.indexOf(i)!==array.lastIndexOf(i)){
     duplicate =i
  }
  }


  return [missing,duplicate];
}

console.log(solution([2,4,1,6,3,4]))