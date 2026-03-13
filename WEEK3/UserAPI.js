import exp from 'express'
import { userModel } from '../modules/userModel.js';
import { hash,compare } from 'bcryptjs';
import jwt from 'jsonwebtoken'
const {sign}=jwt
import {verifyToken} from '../middleware/verifyToken.js'
import {config}
export const userApp=exp.Router()
//define rest api routes
//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body;
    //verigy email
    let user=await userModel.findOne({email,email})
    //if email does not exist
    if(user===null){
        return res.status(400).json({message:"invaild email"})
    }
    //compare password
    let result=await  compare(password,user.password)
    //if password does not match
    if(result===false){
        return res.status(400).json({message:"invaild password"})
    }
    //if password are matched
        //create tokens
        const signedToken=sign({email:user.email},"abcdef",{expiresIn:'1h'})
        //send token in res
        //res.status(200).json({message:"login success",token:signedToken})

        
        //store token as httpOnly cookie
        res.cookie("token",signedToken,{
            httpOnly:true,
            sameSite:"lax",
            secure:false

        })
        //send ss
        res.status(200).json({message:"login success",payload:user})


})

//create new user 
userApp.post("/users",async(req,res)=>{
    //get new user object from req
    const newUser=req.body;
    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace the plain password 
    newUser.password=hashedPassword;
    //create new user document
    const newUserDocument=new userModel(newUser)
    //save
   const result= await newUserDocument.save()
   console.log('result',result)
   //send res
    res.status(201).json({message:"User is created"})//document is succesful then the status code is 201
});

//read all users(protected routes)
userApp.get("/users",verifyToken,async(req,res) => {
    //read all users from db
        let usersList=await userModel.find();
        //send res
        res.status(200).json({message:"users",payload:usersList})//operation is success if status code is 201 and creation//400 -bad request client error and 401 is unautharised resource and 404 is not found  error //500s series tells about the server side problem.
    })

    //read a user by objctId
userApp.get("/user",async(req,res)=>{
    //read object id from request params
    const uid=req.params.id
    //find user by id
    const emailOfUser=req.user?.email;
    //console.log(emailOfUser)
    const userObj=await userModel.findOne({email: emailOfUser}).populate("cart.product")
    //if user not found
    if(!userObj){
        return res.status(404).json({message:"user not found"})
    }
   //send res
    res.status(200).json({message:"user",payload:userObj})
})
//use findOne methode to read a document with to non object id fields.Use findById to read document with object id

//update a user by id
userApp.put("/users/:id",async(req,res)=>{
    //get modified user from req body
    const modifiedUser=req.body;
    const uid=req.params.id;
    //find user by id and update
    const updatedUser= await userModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
     res.status(200).json({message:"user updated",payload:updatedUser})
})

userApp.delete("/users/:id",async(req,res)=>{
    let uid=req.params.id;
    //find and delete by id
    let deletedUser=await userModel.findByIdAndDelete(uid)
      if (!deletedUser) {
    return res.status(404).json({ message: "User not found" });
  }
    //send res
    res.status(200).json({message:"User Deleted"})
})

//add product to cart
userApp.put("/cart/product-id/:productId",verifyToken,async(req,res)=>{
    //get product id from url param
    let productId=req.params.productId;
    //get current user details
    const emailOfUser=req.user?.email;
    //add priduct to cart
    let result= await userModel.findOneAndUpdate({email: emailOfUser},
        {$push : { cart :{ product : productId}}})
        //if user id invalid 
        if(!result){
            return res.status(404).json({message : "user not found"});

        }
        res.status(200).json ({message:"product added to cart "})
    

})