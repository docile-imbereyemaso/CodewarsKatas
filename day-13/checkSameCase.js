function sameCase(a, b){
    const lowerCaseLetters =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperCaseLetters = lowerCaseLetters.map(letter=>letter.toUpperCase());

       if(lowerCaseLetters.includes(a)&& lowerCaseLetters.includes(b)){
        return 1
       }else if(upperCaseLetters.includes(a) && upperCaseLetters.includes(b)){
        return 1
       }else if(lowerCaseLetters.includes(a) && upperCaseLetters.includes(b)){
        return 0
       }else if(lowerCaseLetters.includes(b) && upperCaseLetters.includes(a)){
        return 0
       }else{
        return -1
       }
}

console.log(sameCase("A","?"))