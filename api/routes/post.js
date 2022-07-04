const router = require("express").Router();
const Post = require("../models/Post");

//create post
router.post("/create", async (req, res) => {
    const newPost = new Post({
        text: req.body.text
    });

    try {
        const savedPost = await newPost.save();
        req.status(201).json({text: "post created"})
    }catch (e) {
        res.status(500).json(e);
    }
})

router.put("/:id", async (req,res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json({text: "post updated"})
    }catch (e) {
        res.status(500).json(e)
    }
})

router.delete("/:id", async (req,res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json({text: "Post deleted"})
    }catch (e){
        res.status(500).json(e)
    }
})
router.get("/", async (req,res) => {
    try{
        let posts;

        posts = await Post.find()
        res.status(200).json(posts)
    }catch (e) {

    }
})
module.exports = router