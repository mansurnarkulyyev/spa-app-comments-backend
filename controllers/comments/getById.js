const {Comment} = require("../../models/comment");

const {RequestError} = require("../../helpers");

const getById = async(req, res) => {
    const {id} = req.params;
    const result = await Comment.findById(id, "-createdAt -updatedAt");
    // const result = await Book.findOne({_id: id}, "-createdAt -updatedAt");
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
}

module.exports = getById;