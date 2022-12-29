const {Post} = require("../../models/post");


const updateComment = async(req, res) => {
    const {comment, postId} = req.body;

    const comments={
        user:req.user.id,
        userName: req.user.userName,
        comment,
    }

    const post = await Post.findByIdAndUpdate(postId);
    post.comments.push(comments);
    res.status(200).json(post);
};

module.exports = updateComment;