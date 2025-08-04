function makeClass(...properties) {
  
    return class{
        constructor(...values){
            properties.forEach((props,index)=>{
                this[props] = values[index];
            })
        }
    }

     
    return class {};
}

const Animal2 = makeClass('name','species','age','health','weight','color');

        const dog1 = new Animal2('Bob','Dog','5','good','50lb','brown');
        console.log(dog1)