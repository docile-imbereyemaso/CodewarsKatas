
function findRoutes(routes) {
 const set = new Set();
 let routesMap  = new Map(routes);

 routesMap.forEach((value,key)=>{
    set.add(key);
    set.add(value);
 });

 return [...set];
}
console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]))


