const {Comment} = require("../../models/comment");

const {RequestError} = require("../../helpers");

const updateFavorite = async(req, res) => {
    const {id} = req.params;
    const result = await Comment.findByIdAndUpdate(id, req.body, {new: true});//{new: true} обновленный результат 
    if(!result) {
        throw RequestError(404, "Not found");
    }
    res.json(result);
};

module.exports = updateFavorite;