const temperatures = [32, 35, 28, 40, 38, 30, 42];
  /*1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28*/
   
   //1
    let r=temperatures.filter((temperatures)=>temperatures>35)
    console.log(r);

    //2
    let r1=temperatures.map((temperatures)=>temperatures*(9/5)+32)
    console.log(r1);


    //3
   let r3=temperatures.reduce(function(acc,element)
    {
    return (acc+element);

    })
    /temperatures.length
   
   console.log(r3);


   //4
    let r4=temperatures.find((temperatures)=>temperatures>40)
    console.log(r4);


    //5
     let r5=temperatures.findIndex((temperatures)=>temperatures==28)
    console.log(r5);



