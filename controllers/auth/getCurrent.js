const getCurrent = async(req,res) =>{
    const {name, email, token,_id,avatarURL} = req.user;
    res.json({
       user: {
        name,
        email,
        _id,
        avatarURL
    },
        token
    })
}

module.exports = getCurrent; 