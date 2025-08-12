function solution(array) {
  var missing = 0, duplicate = 0;
  let min = Math.min(...array);
  let max = Math.max(...array)

  for(let i=min;i<=max;i++){
  if(!array.includes(i)){
    console.log(i)
     missing = i  
  }
  }
 duplicate = array.find((element,index,self)=>self.indexOf(element)!==index)||max;
 

  return [missing,duplicate];
}

console.log(solution([1,2]))
