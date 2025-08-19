function duplicates(arr) {
    let unique = arr.filter((element,index,self)=>self.indexOf(element)!== index);
 return [...new Set(unique)]
}

// by applying the set and map in the logic
function findDuplicates(arr){
    let map = new Map();
    let set = new Set();
    
    arr.forEach((element)=>{
        map.get(element) ? set.add(element):map.set(element,true)
    })
    
    return [...set]
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"] ))