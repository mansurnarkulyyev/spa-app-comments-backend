const {User} = require("../../models/user");

const logout = async(req,res) => {
   const {_id} = req.user; //кто хочет разлогинится 
    await User.findByIdAndUpdate(_id, {token:""}); //обнуляем токен
    res.json({
         message: "Logout success",
    });
};

module.exports = logout;