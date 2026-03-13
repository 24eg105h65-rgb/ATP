/*import exp from 'express'
import { connect } from 'mongoose';
import { productApp } from './APIs/ProductAPI.js';
const app=exp()

//Add body parser
app.use(exp.json())

//Forward request to UserApp if path starts with /user-api
app.use("/product-api",productApp) 

//Connect to DB Server
async  function connectDB(){
    try{
        await connect("mongodb://127.0.0.1:27017/product-DB");
        console.log("DB Connection success")
        //Start server
        app.listen(7000,()=>console.log("Server listening on port 7000"))
    }catch(err){
        console.log("err in DB connection: ",err)
    }
}
connectDB();


//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    console.log(err.callStack)
    console.log(err.message)
    if(err.name==='ValidationError'){
        return res.status(400).json({message:'error occured',error:"Client side error"})
    }
    //castError
    if(err.name==="CastError"){
        return res.status(400).json({message:'error occured',error:"Client side error"})
    }
    res.status(500).json({message:"error occured", error:"server side error"})
})

*/




import exp from 'express';
import {connect} from 'mongoose';
import { userApp} from './APIs/UserAPI.js';
import { productApp } from './APIs/ProductAPI.js';
import cookieParser from "cookie-parser";

const app=exp();
//
app.use(exp.json())
//FORWARD REQ 
app.use("/user-api",userApp)
app.use("/product-api",productApp)

app.listen(6000,()=>console.log(`server is starting...`))

async function connectDB(){
    try{
        await connect("mongodb://127.0.0.1:27017/ATP-DB")
        console.log("DB connection successfull")
    }
    catch(err){
        console.log("err in DB connection:",err)
    }
}
connectDB()


//error handling middleware
 app.use((err,req,res,next)=>{
     console.log(err.name)
     console.log(err.callStack)
     console.log(err.message)
     if(err.name==='ValidationError'){
         return res.status(400).json({message:'error occured',error:"Client side error"})
     }
     //castError
     if(err.name==="CastError"){
         return res.status(400).json({message:'error occured',error:"Client side error"})
     }
     res.status(500).json({message:"error occured", error:"server side error"})
 })
