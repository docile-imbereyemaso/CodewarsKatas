function differenceOfSquares(n) {
  
    const mapNumber = new Map();
      mapNumber.set("sumOfNumber",[]);
      mapNumber.set("sumOfSquares",[]);
     for(let i=1;i<=n;i++){
        mapNumber.get("sumOfNumber").push(i);
        mapNumber.get("sumOfSquares").push(i);
     }
  return (mapNumber.get("sumOfNumber").reduce((acc,curr)=>acc+curr,0)**2)- mapNumber.get("sumOfSquares").map(num=>num*num).reduce((acc,curr)=>acc+curr,0)
}

console.log(differenceOfSquares())