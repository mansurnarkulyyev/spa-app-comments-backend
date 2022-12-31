const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const captchaRouter = require("./routes/api/captcha");
const commentsRouter = require("./routes/api/comments");

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'


// 
// const bcrypt = require("bcryptjs");

// const hashPassword = async (password) =>{
//   // const salt = await bcrypt.genSalt(10)
//   // console.log(salt);
//  const result= await bcrypt.hash(password,10)
//  console.log(result);
//  const compareResult = await bcrypt.compare(password, result);//сравнение пороль с фронтенда и в хашированным паролем
//  console.log(compareResult);//тру или фалс 
// }
// hashPassword("ADMINcomments")


app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);
app.use("/api/captcha", captchaRouter);
app.use('/api/comments', commentsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const {status = 500, message = "Server error"} = err;
  res.status(status).json({ message })
})

module.exports = app
