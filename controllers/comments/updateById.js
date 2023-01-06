const {Post} = require("../../models/post");

const {RequestError} = require("../../helpers");

const updateById = async(req, res) => {
    console.log(req.body);

    const {id} = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body, {new: true});

    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateById;



// const fs = require("fs/promises");
// const path = require("path");

// const {Post} = require("../../models/post");

// const avatarDir = path.join(__dirname, "../../", "public", "comments");


// const updateById = async(req, res) => {
//   const { path: tempUpload, originalname } = req.file;

//     const {_id:owner} = req.user;
//     const result = path.join(avatarDir, originalname);
    
//   const cover = path.join(`comments`, originalname);
//   await fs.rename(tempUpload, result);
//     const response = await Post.findByIdAndUpdate({...req.body, owner, cover },{new: true});
//     res.status(201).json(response)
// }

