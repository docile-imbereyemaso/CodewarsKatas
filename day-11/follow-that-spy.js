const findRoutes = (routes)=>{

const routesMap = new Map(routes);

const starts = new Set(routesMap.keys());
// finding the starting point
for(let destination of routesMap.values()){
    starts.delete(destination);
}

let start = [...starts][0];

let result  =[start];

while(routesMap.has(start)){
    start = routesMap.get(start);
    result.push(start);
}
return result.join(", ")
}


console.log(findRoutes([["MNL", "TAG"], ["CEB", "TAC"], ["TAG", "CEB"], ["TAC", "BOR"]]))