function position(letter){
 const alphabets =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","w","y","z"];
 return `Position of alphabet: ${alphabets.indexOf(letter.toLowerCase())+1}`;
}

console.log(position("a"))