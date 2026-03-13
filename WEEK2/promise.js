// i will send money in 10 sec
console.log('Friend is waiting for call')
let futureConditions=true;
const promiseObjs=new Promise((fulfilled,rejected)=>{
       setTimeout(() => {
        if(futureCondition===true){
         fulfilled('promise fufullied')
       }
       else{
        rejected('promise rejected')
       }
       }, 5000);
})
console.log(promiseObj)
promiseObj
.then((message)=>console.log("message is then:",message))
.catch((error)=>console.log('erroe:',errorMessage))

console.log("i will send money in 10")
let futureCondition=true;
const promiseObj=new promiseObj((fullfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true){
         fullfilled('promise fufullied')
       }
       else{
        rejected('promise rejected')
       }
       }, 10000);

    
})
console.log(promiseObj)
promiseObj
.then((message)=>console.log("message is then",message))
.catch((error)=>console.log('error:',errorMessage))                          