const {Post} = require("../../models/post");


const updateDislike = async(req, res) => {
    const {id} = req.params;
    const result = await Post.findByIdAndUpdate(id, req.body, {new: true});

    if(!result.dislike.includes(req.body.user)) {
        await result.updateOne({$push:{dislike:req.body.user}})
        return res.status(200).json( "Post has been liked");
    }
    await result.updateOne({$push:{dislike:req.body.user}})
    return res.status(200).json( "Post has been unlike");
};

module.exports = updateDislike;