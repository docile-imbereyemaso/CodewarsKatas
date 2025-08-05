function promiseHelloWorld() {
  // replace this nonsense with your Promise
  return new Promise((resolve,reject)=>{
    resolve("Hello World!");
  })
}

promiseHelloWorld()
.then(message=>console.log(message));

