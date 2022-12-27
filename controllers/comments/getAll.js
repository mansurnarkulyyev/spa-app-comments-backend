const {Comment} = require("../../models/comment");

const getAll = async(_, res) => {
    const result = await Comment.find({}, "-createdAt -updatedAt");
    res.json(result);
}

module.exports = getAll;