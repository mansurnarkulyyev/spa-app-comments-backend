const {Post} = require("../../models/post");

const {RequestError} = require("../../helpers");

const removeById = async(req, res) => {
    const {id} = req.params;
    const result = await Post.findByIdAndDelete(id);
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.status(200).json(id);
};

module.exports = removeById;