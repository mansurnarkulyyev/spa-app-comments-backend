const fs = require("fs/promises");
const path = require("path");

const {Comment} = require("../../models/comment");

const avatarDir = path.join(__dirname, "../../", "public", "comments");


const add = async(req, res) => {
  const { path: tempUpload, originalname } = req.file;

    const {_id:owner} = req.user;
    const result = path.join(avatarDir, originalname);
  const cover = path.join(`comments`, originalname);
  await fs.rename(tempUpload, result);
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const response = await Comment.create({...req.body, owner,cover });
    res.status(201).json(response)
}

module.exports = add;


