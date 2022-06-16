const Post = require("./Post");
const PostService = require("./PostService");


//crud
class PostController {
    async create(req, res) {
        try {
            console.log(req.files);
            const post = await PostService.create(req.body, req.files.picture);
            res.json(post);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch(e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }

    async update(req, res) {
        try {
            const post = req.body;
            const updatedPost = await PostService.update(post._id, post);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params;
            const deletePost = await PostService.delete(id);
            return res.json(deletePost);
        } catch(e) {
            res.status(500).json(e.message);
        }
    }
}

module.exports = new PostController();