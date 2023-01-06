const mongoose = require("mongoose");
const app = require("./app");
mongoose.set('strictQuery', true);
// const { DB_HOST, PORT=3007 } = process.env;

mongoose
  .connect("mongodb+srv://Mansur:hH6mTQM8pH7XCf0k@cluster0.0brwolc.mongodb.net/comments_creator?retryWrites=true&w=majority")
  .then(() => app.listen(PORT, () => console.log("Started ok")))
  .catch((err) => {
    console.log(err.message);
    process.exitCode = 1;
  });
