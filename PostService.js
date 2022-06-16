const Post = require("./Post");
const fileService = require("./fileService");

class PostService {
    async create(post, picture) {
        const fileName = fileService.saveFile(picture);
        const createdPost = await Post.create({...post, picture: fileName});
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getOne(id) {
        if(!id) {
            throw new Error("не указан ID");
        }
        const post = await Post.findById(id);
        return post;
    }

    async update(id, post) {
        if(!id) {
            throw new Error("не указан ID");
        }
        const updatedPost = await Post.findByIdAndUpdate(id, post, {new: true});
        return updatedPost;
    }

    async delete(id) {
        if(!id) {
            throw new Error("не указан ID");
        }
        const deletePost = await Post.findByIdAndRemove(id);
        return deletePost;
    }
}

module.exports = new PostService()