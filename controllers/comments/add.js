const {Comment} = require("../../models/comment");

const add = async(req, res) => {
    const result = await Comment.create(req.body);
    res.status(201).json(result)
}

module.exports = add;