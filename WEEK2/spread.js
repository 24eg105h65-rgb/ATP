//spread operator

let person={
    name:'ravi',
    address:{
        city:'hyd',
        pincode:9999,

    }
}
let copyPerson1=structuredClone(person)
person.name="suresh"
person.address.city="sec"
console.log(person)
console.log(copyPerson1)



 let fruits = ["apple", "banana"];
 let moreFruits=[...fruits,"orange"];
 console.log(fruits)
console.log(moreFruits)



let user = {
 name: "Ravi",
city: "Hyderabad"
};

let updatedUser={...user,age:25};
console.log(user)
console.log(updatedUser)

