//class has logical existance
//object has physical existance




//object literal can have object and methods without class 

// create 20 students objects
/*class Student{
    //properties 
    #sno;
    name;
    email;

    //constructor(name of the constructor method is constructor only)
    constructor(sno,name,email){
        //initialisation obj
        this.#sno=sno;
        this.name=name;
        this.email=email;

    }
    //methods
    getStudentName(){
        return this.name;
    }
}

//create object
let std1=new Student(10,'ravi','ravi@gmail.com')

console.log(std1.name)
console.log(std1.)

console.log(std1.sno)*/


class Book
{
     title;
      author; 
      pages; 
      isAvailable;
}

constructor(title,author,pages,isAvailable){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isAvailable;
}

borrow()
{
    if(!isAvailable){
        return 'book not available';
    }
}
returnBook()
{
    if(isAvailable){
        return 'book is available';
    }
}
getInfo()
{
    return this.title,this.author,this.pages,this.isAvaolable;
}
isLongBook()
{
    if(pages>300){
        return 'true';
    }else{
        return 'false';
    }
}
 let b1=new Book('harry porter','JK rowling',250,'false')
  let b2=new Book('the life','revanth',305,'true')
   let b3=new Book('the after hours','ruskin',100,'false')
    let b4=new Book('the party never ends','bond',143,'true')
     let b5=new Book('the one','ramu',450,'true')


    console.log(b1.hetInfo())
    console.log(b3.isLOngBook())