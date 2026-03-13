import {Schema,model} from 'mongoose'
const  productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"productId is requires"]
    },
    productName:{
        type:String,
        required:[true,"name is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"minimum price is 10000"],
        max:[50000,"maximun price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
},
{
     versionKey:false,
    timestamps:true
}
);

//generate usermodel          
export const productModel=model("product",productSchema)