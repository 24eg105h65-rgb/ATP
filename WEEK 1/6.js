function biggestOfThree(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum=sum+x[i];
    
    }
    return sum;
}
let result=biggestOfThree([90,78,65,98]);
console.log(result);
