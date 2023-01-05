const {Post} = require("../../models/post");


const updateComment = async(req, res) => {
    const {comment, postId} = req.body;
    console.log(req.body);

    const comments={
        user:req.user._id,
        // userName: req.user.userName,
        comment,
    }
    
    const post = await Post.findByIdAndUpdate(postId);
            post.comments.push(comments);
            await post.save();
    res.status(200).json(post);
};

module.exports = updateComment;