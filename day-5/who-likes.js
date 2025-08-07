function likes(names) {
 if(names.length==0){
    return "no one likes this";
 }else if(names.length===1){
    return names.join("") +" likes this";
 }else if(names.length===2){
    return names.join(" and ")+" like this";
 }else if(names.length===3){
    return names.slice(0,2).join(", ")+" and "+names.slice(2)+" like this"
 }else{
    return names.slice(0,2).join(", ")+" and " + names.slice(2).length+" others like this";
 }
}

console.log(likes(["Alex", "Jacob", "Mark", "Max", "Jacob", "Mark", "Max"]))