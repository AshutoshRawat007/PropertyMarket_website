const BlogPost = require('../models/BlogPosts');
const uploadImage = require('../util/uploadImage');

// Create a new blog post
exports.createBlog = async (req, res) => {
    const files = req.files;
    const { title, content } = req.body;

    try {
        if (!files[0]) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const url = await uploadImage(files[0].path);
        const blogDoc = await BlogPost.create({
            title,
            coverimage: url,
            content,
        });
        res.json(blogDoc);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Failed to create blog post' });
    }
};

// Get a blog post by ID
exports.getBlogById = async (req, res) => {
    const { id } = req.params;

    try {
        const blogPost = await BlogPost.findById(id);
        if (!blogPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.json(blogPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all blog posts
exports.getAllBlog = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find(); // Retrieve all data from MongoDB
        res.json(blogPosts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
