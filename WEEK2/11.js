const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

/*Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
//1
   let r1=students.filter((elements)=>elements.marks>=40)
   console.log(r1)


   //2
   let r2=students.map(function(elements){
    if(elements.marks>=90){
        return 'A';
    }else if(elements.marks>=75)
        {
        return 'B';
    }else if(elements.marks>=60){
        return 'C';
    }else{
        return 'D';
    }
   })
console.log(r2)

//3
let r3=students.reduce((acc,element)=>acc+element.marks,0)
console.log(r3/students.length)


//4
let r4=students.find((elements)=>elements.marks===92)
console.log(r4)


//5
let r5=students.findIndex(elements=>elements.name==='Kiran')
console.log(r5)

