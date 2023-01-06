const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const {User} = require("../../models/user");
// const {SECRET_KEY} = process.env;
const SECRET_KEY = "1234asdfg"
const {RequestError} = require("../../helpers")

const register = async(req,res)=>{

    const {name,email,password} = req.body;

    const user = await User.findOne({email});

    if(user){
        throw RequestError(409, " Email already use!")
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);//шаблонный аватар пользователья 
   

    const result = await User.create({name, email, password:hashPassword, avatarURL});

      const payload = {
        id: result._id,
    }
    const token = jwt.sign(payload ,SECRET_KEY,{expiresIn: "2h"});

await User.findByIdAndUpdate(result._id,{token});
  
    res.status(201).json({
       user: {
        name:result.name,
        email:result.email,
    },
         token,
    });
};
 
module.exports = register;
