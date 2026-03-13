let arr=[10,20,30]
let[a,b,c]=arr;
console.log(a,b,c)


let emp={
    eid:100,
    company:"tcs",

}
let{eid,company}=emp;
console.log(eid,company)


let emp1={
    eid1:100,
    company1:"tcs",
    address:{
        city:'hyd'
    }

}
let{eid1,company1,address1:{city}}=emp1;
console.log(eid1,company)