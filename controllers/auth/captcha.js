const svgCaptcha = require('svg-captcha');

const {RequestError} = require("../../helpers")

const captcha = async(req,res)=>{

   const captcha = svgCaptcha.create();
  
   req.query.captcha = captcha.text;

    if(!captcha){
        throw RequestError(404, "Not Verified!")
    }

    res.status(200).json({
        text: captcha.text,
        svg: captcha.data,
        message:'verified',
    });

    res.type('svg');
};
 
module.exports = captcha;



// app.get('/captcha', function (req, res) {
// 	const captcha = svgCaptcha.create();
//   req.query.captcha = captcha.text;
//   // console.log(captcha.text);
//   if(captcha){ 
//      res.status(200).json({
//        text: captcha.text,
//         svg: captcha.data,
//         message:'verified'
//     });
//         // res.status(200).json(
//         //   captcha.data, {message:'verified'}
//         //   );
//         res.type('svg');
//     }

//    res.send({message: "Not Verified!"})
//   // console.log(captcha.data);
// });
