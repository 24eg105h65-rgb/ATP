function biggestOfThree(a,b,c){  
    if (a>b&&a>c){
        return a;
    }
    else if (b>c){
        return b;
    }else{
        return c;
    }
} 
let result=biggestOfThree(10,20,5);
console.log(result);