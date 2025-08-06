const divisions  = (n,divisor)=>{
    let result =[];
    while(n>1){
        n /= divisor
        result.push(Math.round(n));
    }

    return result.length>1?result.filter((n)=>n!==1).length:result.length;
}

console.log(divisions(100,2))