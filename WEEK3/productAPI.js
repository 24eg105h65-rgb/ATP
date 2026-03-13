import exp from 'express'
import { productModel } from '../modules/productModel.js';
export const productApp=exp.Router()
//create product
productApp.post("/products",async(req,res)=>{
    const newProduct=req.body;
    const newProductDocument=new productModel(newProduct)
    const result=await newProductDocument.save()
    console.log('result',result)
    res.status(201).json({message:"product has been updated"})
});

productApp.get("/products",async(req,res) => {
        let productList=await productModel.find();
        res.status(200).json({message:"products",payload:productList})
    })


productApp.get("/products/:id",async(req,res)=>{
    const uid=req.params.id
   const productObj= await productModel.findById(uid)
    if(!productObj){
        return res.status(404).json({message:"product not found"})
    }
    res.status(200).json({message:"product",payload:productObj})
})

productApp.put("/products/:id",async(req,res)=>{
    const modifiedProduct=req.body;
    const uid=req.params.id;
    const updatedProduct= await productModel.findByIdAndUpdate(uid,{$set:{...modifiedProduct}},{new:true,runValidators:true})
     res.status(200).json({message:"product updated",payload:updatedProduct})
})

productApp.delete("/products/:id",async(req,res)=>{
    let uid=req.params.id;
    let deletedProduct=await productModel.findByIdAndDelete(uid)
    res.status(200).json({message:"Product Deleted"})
})
