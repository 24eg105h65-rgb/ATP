import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next){
    //token verification logic 
    const token=req.cookie?.token;
    //if req from unauthorised user
    if(!token){
        return res.status(401).json({message:"pls login"})
    }
    try{
    //if token existed 
    const decodedToken=jwt.verify(token,"abcdef");
        console.log(decodedToken)
        //call next
        req.user=decodedToken;
        next();

    }catch{
        res.status(401).json({messagw:"session expired pls login again "})
    }
}

