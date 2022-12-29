const {Post} = require("../../models/post");

const {RequestError} = require("../../helpers");

const removeById = async(req, res) => {
    const {id} = req.params;
    const result = await Post.findByIdAndRemove(id);
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json({
        message: "Delete success"
    });
};

module.exports = removeById;