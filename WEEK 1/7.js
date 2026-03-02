function search(x,y){
    for(let i=0;i<x.length;i++){
        if(x[i]===y){
            return i;
        }
    }
    return"Not found";
}
 let result=search([90,78,65,98],65);
 console.log(result);