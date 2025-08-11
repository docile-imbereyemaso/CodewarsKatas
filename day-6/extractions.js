const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

function getMichaelLastName(inputText) {
  // your awesome code here
  const textarray = inputText.split(" ");
  let result =[];

for(let i=0;i<textarray.length;i++){
    if(textarray[i]==="Michael"){
   if(!textarray[i+1].length<=2){
    result.push(textarray[i+1])
   }
       
    }
} 
return result.map(word=>{
  return word.replace(/[^a-zA-Z0-9]/g, ''); 
}).filter(element=>element.length>2)
}
console.log(getMichaelLastName(inputText))
