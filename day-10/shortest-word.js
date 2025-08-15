function findShort(s){

   const strArr = s.split(" ");

   return strArr.map(word=>word.length).sort((a,b)=>a-b)[0]
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// Refactor the codes using Map()

function findshort(s){
const strarr = s.split(" ");
const countMap = new Map();

for(let word of strarr){
    countMap.set(word,word.length);
}

let minLength =Infinity;

for(let length of countMap.values()){
    if(length < minLength){
        minLength = length;
    }
}

return minLength;
}

console.log(findshort("bitcoin take over the world maybe who knows perhaps"))
