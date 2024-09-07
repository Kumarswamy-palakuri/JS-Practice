const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
    const blogs = await Blog.find().sort({ date: -1 });
    res.render('index', { blogs });
});

// Create new blog (GET & POST)
router.get('/new', (req, res) => {
    res.render('new');
});

router.post('/', async (req, res) => {
    const newBlog = new Blog({
        title: req.body.title,
        content: req.body.content,
    });
    await newBlog.save();
    res.redirect('/blogs');
});

module.exports = router;
