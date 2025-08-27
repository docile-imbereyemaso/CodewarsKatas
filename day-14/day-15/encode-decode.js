function encode(str){
    const charMap = new Map([["a",1],["e",2],["i",3],["o",4],["u",5]]);
     
    let encoded ='';
    for(let i=0;i<str.length;i++){
        const char = str[i];
        const character =charMap.get(char)|| char;
        
        encoded += character;
        
    }

    return encoded


}

function decode(str){
     let countMap = new Map ([[1,"a"],[2,"e"],[3,"i"],[4,"o"],[5,"u"]]);

     for(let i=0;i<str.length;i++){
        console.log(str[i]);
     }
     

}

console.log(decode("h2ll4"));