const {Post} = require("../../models/post");

const {RequestError} = require("../../helpers");

const updateFavorite = async(req, res) => {
    const {id} = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body, {new: true});//{new: true} обновленный результат 
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateFavorite;