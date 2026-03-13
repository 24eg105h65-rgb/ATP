import {Schema,model,Types} from 'mongoose'

//create  cart schema{ product , count }
const cartSchema=new Schema({
    product :{
        type:Types.ObjectId,
        ref:"product" //name of the product
    },
    count:{
        type:Number,
        default:1
    }

})


//create user schema
const  userSchema=new Schema({
    //structure of user resource 
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"min length of username is 4 characters"],
        maxLength:[6,"username size exceed 6 chars"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email already existed"]
    },
    age:{
        type:Number

    },
    cart:[cartSchema],//
},
{
    versionKey:false,
    timestamps:true
}
);

//generate usermodel          
export const userModel=model("user",userSchema)
