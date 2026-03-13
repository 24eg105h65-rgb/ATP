/*When a student submits an exam:

        Immediately show: “Exam submitted successfully”
        After 2 seconds → show: “Evaluating answers…”
        After 4 seconds → show: “Result: Pass”*/

setTimeout(()=>{
    console.log("evaluating answers")
},2000)
setTimeout(()=>{
    console.log("results :pass")
},4000)
console.log("exam submitted succesfull")



   /*Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends */




        console.log("otp sent succesfully")
        let seconds=10;
let intervelid=setInterval(()=>{
for(i=10;i>0;i--){
    console.log(i)
}
clearInterval(intervelid)
},1000)     
console.log("resend otp")   
