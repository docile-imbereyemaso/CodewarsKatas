function areEqual(s1, s2){
  // ...
 for(let elements of s1){
    if(s2.has(elements)){
        console.log(elements)
    }
 }

    return false;
}

function notEqual(s1, s2){
  // ...
    return false;
}
const A  = new Set([1,2]);
const A2 = new Set([3,2]);
console.log(areEqual(A,A2));
