function leastLarger(a,i) {
    let result =a.filter((element,index,self)=>element>self[i]).sort((a,b)=>a-b);
    if(result.length>0){
      return a.indexOf(result[0])
    }
    
  return -1;

}

console.log(leastLarger([4, 1, 3, 5, 6], 0 ));
console.log(leastLarger( [4, 1, 3, 5, 6], 4 ));
console.log(leastLarger( [1, 3, 5, 2, 4], 0 ))