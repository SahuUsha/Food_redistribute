import express, { json, Router } from 'express';
import { PrismaClient } from '@prisma/client';
const pclient=new PrismaClient();
export const userRouter=Router();
import z, { string } from 'zod';
import bcrypt, { hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
const JWT_KEY=process.env.JWT_KEY as string;
console.log(JWT_KEY);
const CLIENT_ID=process.env.CLIENT_ID
const CLIENT_SECRETE=process.env.CLIENT_SECRETE;
const sendemail=require("../otplogic/otp");
import otpgenerator from 'otp-generator';

userRouter.post("/signup",async(req,res)=>{
        console.log("reached!!")
        console.log(JWT_KEY);
   try{
    const RequiredTypes=z.object({
        name:z.string().min(3).max(100),
        email:z.string().min(5).max(100).email(),
    })
    
    const CheckedRequiredTypes=RequiredTypes.safeParse(req.body);
    
    if(!CheckedRequiredTypes.success){
        res.status(422).send("Invalid Input types");
        return;
    }
     
    
    const {name,email,googleId}=req.body;
    
    const CheckedByEmail=await pclient.users.findUnique({
        where:{
            email:email
        }
    })
    
    if(CheckedByEmail){
        res.json({
            message:"Email_exists"
        })
        return;
    }
    
     const PutUserIntoDB=await pclient.users.create({
        data:{
            googleId:googleId,
            name:name,
            email:email,
            verified:false,
        }
     })

     const CreateOTP=otpgenerator.generate(6,{
        digits:true,upperCaseAlphabets:false,specialChars:false,lowerCaseAlphabets:false
     }) 

     
     await sendemail(email,"OTP-VERIFICATION",CreateOTP)
     
     const CreateOTPEntryInDB=await pclient.otpmodel.create({
        data:{
            email:email,
            otp:CreateOTP
        }
     })

     const token=jwt.sign({
        userId:PutUserIntoDB.id
    },JWT_KEY);
    
     res.cookie("userId",PutUserIntoDB.id,{httpOnly:false,secure:false});

    res.cookie("uidcookie",token,{
        httpOnly:false,
        secure:false
    })

    res.status(200).send("OTP_Send");
   } catch(e){
       console.log(e)
    res.status(500).send("Something went Wrong!!!");
    return;
   }
})

userRouter.post("/logout",(req,res)=>{
    res.clearCookie("uidcookie", {
        httpOnly: false,  // Ensures the cookie cannot be accessed via JavaScript
        secure: true,    // Ensures the cookie is only sent over HTTPS
    });
    res.clearCookie("userId", {
        httpOnly: false,  // Ensures the cookie cannot be accessed via JavaScript
        secure: true,    // Ensures the cookie is only sent over HTTPS
    });

    res.json({
        message:"logout"
    })
})

userRouter.post("/verifyotp",async(req,res)=>{
    const token=req.cookies.uidcookie;
    // console.log("here");



    if(!token){
        res.json({
            message:"Not_SignedIn"
        })
        return;
    }
    
    const {otp,email}=req.body;
   

    const FindEmail=await pclient.users.findUnique({
        where:{
            email
        }
    })
    if(!FindEmail){
        res.json({
            message:"Not_found"
        })
        return;
    }

    // console.log("here also")
    const FindOTPInDB=await pclient.otpmodel.findUnique({
        where:{
            otp
        }
    })
        
    if(!FindOTPInDB){
        res.json({
            message:"Invalid_otp"
        })
        return;
    }
    const updateUser=await pclient.users.update({
        where:{
            email:email
        },
        data:{
           verified:true 
        }
    })

    const deleteOTPRecord=await pclient.otpmodel.delete({
        where:{
            otp:otp
        }
    })

    res.json({
        message:"Verified!!"
    })

})

userRouter.post("/signin",async(req,res)=>{
    console.log("recieved")
    console.log(req.body);
   try {
     
    const RequiredTypes=z.object({
        email:z.string().min(5).max(100).email(),
    })

    const CheckedRequiredTypes=RequiredTypes.safeParse(req.body);
     
    if(!CheckedRequiredTypes.success){
       res.status(422).send("Invalid_Input");
       return;
    }
    console.log("here also");
 
    const {email}=req.body;
   
    
    const CheckedByEmail=await pclient.users.findUnique({
        where:{
           email:email 
        }
    })

    if(!CheckedByEmail){
       res.json({
        message:"not_found"
       })
       return;
    }

    //if email exists but otp not verified then again send OTP to user then 
    //verify otp 
    if(CheckedByEmail && !CheckedByEmail.verified){
         res.json({
          message:"Look_like_you_are_not_verfied"
         })
         return;
    }

    const token=jwt.sign({
        userId:CheckedByEmail.id
    },JWT_KEY);
    
    //  console.log(CheckedByEmail);

     res.cookie("userId",CheckedByEmail.id,{httpOnly:false,secure:false});

    res.cookie("uidcookie",token,{
        httpOnly:false,
        secure:false
    })
    res.json({
        data:CheckedByEmail
    })


   } catch (error) {
       console.log(error);
       res.status(500).send("Something went wrong!!");
       return;
   }
})


userRouter.get("/auths",async(req,res)=>{

    const token=req.cookies.uidcookie;
        if(!token){
            res.json({
                message:"unauths"
            })
            return;
        }   
        const user=await pclient.users.findFirst({
           where:{
             id:req.cookies.userId
           }
        })
        res.json({
            message:"authenticated",
            userData:user
         })
})          


userRouter.post("/resend",async(req,res)=>{
      const token=req.cookies.uidcookie;

      if(!token){
        res.json({
            message:"not_signedIn"
        })
        return;
      }

      const {email}=req.body;

      const deleteOTPRecord=await pclient.otpmodel.delete({
        where:{
            email:email
        }
    })
       
      const CreateOTP=otpgenerator.generate(6,{
        upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false
      })
      await sendemail(email,"OTP-VERIFICATION",CreateOTP);


      const CreateOTPEntryInDB=await pclient.otpmodel.create({
        data:{
            email:email,
            otp:CreateOTP
        }
     })

     res.json({
        message:"OTP_send_to_your_email"
     })

})

