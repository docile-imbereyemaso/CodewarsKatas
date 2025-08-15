
// with the map it will remove the duplication of elements
const replacePosition = (input)=>{
    const alphabets =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",'w',"x","y","z"];
    const inputArr = input.replace(/[^\w\s]|_/g, '').toLowerCase().split("").filter(element=>element !==' ');
        const alphatMap = new Map();
    inputArr.forEach(element => {
       alphatMap.set(element,alphabets.indexOf(element)+1)
    });

   
   return alphatMap
}

// usual approach to solve the kata
const replacePosition1 = (input)=>{
    const alphabets =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v",'w',"x","y","z"];
    const inputArr = input.replace(/[^\w\s]|_/g, '').toLowerCase().split("").filter(element=>element !==' ');
  

   
   return inputArr.map(word=>alphabets.indexOf(word)+1).join(" ");
}


console.log(replacePosition1(`The sunset sets at twelve o' clock.`))