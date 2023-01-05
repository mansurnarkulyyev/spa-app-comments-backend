const fs = require("fs/promises");
const path = require("path");

const {Post} = require("../../models/post");

const avatarDir = path.join(__dirname, "../../", "public", "comments");

const add = async(req, res) => {
  
  const { path: tempUpload, originalname } = req.file;

    const {_id:owner} = req.user;
    const result = path.join(avatarDir, originalname);
    
  const cover = path.join(`comments`, originalname);
  await fs.rename(tempUpload, result);
    const response = await Post.create({...req.body, owner, cover });
    res.status(201).json(response)
}

module.exports = add;
