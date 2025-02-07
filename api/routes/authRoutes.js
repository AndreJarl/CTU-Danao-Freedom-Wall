import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs"

const router = express.Router();

router.post("/register", async (req,res)=>{
       const {name, email, password} = req.body;

       try{
            let user = await User.findOne({email});
            if(user) return res.status(500).json({message:"email already exist"});

            const hashPassword = await bcrypt.hash(password, 10);
            user = new User({name, email, password: hashPassword});

            await user.save();
            res.status(200).json({messsage:"registered successfully fuck u"});
       }catch(error){
              res.status(400).json({message:"server error"});
       }
});

router.post("/login", async (req,res)=>{
      const {email, password} = req.body;

      try{
           let user = await User.findOne({email});
           if(!user) return res.status(500).json({message:"email not extis!"});

           const isMatch = await bcrypt.compare(password, user.password);
           if(!isMatch) return res.status(401).json({message:"iinvalid credentials"});

          const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1hr"});

          res.json({token, user: {id: user._id, name: user.name, email: user.email}});



      }catch(error){
         console.error("login error");
         res.status(500).json({message:"server error"});
      }
})

export default router;