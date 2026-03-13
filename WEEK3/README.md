generate package.jason
create express server
install mongoose and connect to mongoDB server
build USER REST API
            -create user
            -read all users
            -read a user by id
            -update a user by id
            -delete a user by id

we need to create schema and model of the resource(user)
create USER API 




import exp from 'express';
import {connect} from 'mongoose';
import { userApp} from './APIs/UserAPI.js';
const app=exp();
//
app.use(exp.json())
//FORWARD REQ 
app.use("/user-api",userApp)


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


//relationship http and tcpip
//event loop    
//asyncronised 
//java script engine ->stack and heap memory
//jre can execute the js program
//express application
//middleware 
//use findOne method to read a document with non object id feilds 
//use findById to read documents with onject id
//error handling middleware




//error handling middleware
app.use((err,req,res,next)=>{
    res.json({message:"error occured",error:err.message})
})


//satus codes
//200->success
//201->created
//400->bad request
//401->unauthorized
//404->not found
//500->server error

// a medium to communicate between client anad server.
//tcpip and http relationship 
//eventloop have no purpose when a synchronus.continuesly monitoring the elements and sending elements to stack.
//javaxscript engine cannot deal with asynchronus operations.
// what modules are present in package.json.........object document mapping(odm) mongoose.




### user authentication(login)
    -submit credentials and get token
    


    to access cookie property of request object we need cookie parser middleware otherwise request.cookies is undefined 



    //cross origin vs same origin 
    crosse origin it means when client and server are running in different domain
    same origin means the client also running in same 
    cookies will send along wiuth request   automatically in same origin request .but for cross origin request ,the token should be explicitlty included to the request 