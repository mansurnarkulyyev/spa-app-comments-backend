const getCurrent = async(req,res) =>{
    const {name, email, token} = req.user;
    res.json({
       user: {
        name,
        email,
    },
        token
    })
}

module.exports = getCurrent; 