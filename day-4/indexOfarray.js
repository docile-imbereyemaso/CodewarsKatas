var searchArray = function (arrayToSearch, query) {
// TODO your code here
return arrayToSearch.map((element,index,self)=>{
    if(self.includes(query)){
        return query
    }
    return self.indexOf(query)
})
//  return arrayToSearch.filter((element,index,self)=>self.indexOf(query)!==-1);
}

console.log(searchArray([[1,2],[3,4],[5,6],3],[1,2]))

console.log([1,3]==[1,3])

// const filtering =(arr,n)=>{
//     if(arr.includes(n)){
//         return n
//     }
// }
// console.log(filtering([1,2,3,4,5],5))