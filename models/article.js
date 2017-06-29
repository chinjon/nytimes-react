const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    articleId: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    multimedia: {
        type: String,
        required: true,
        default: "https://placeholdit.imgix.net/~text?txtsize=26&txt=No+Image+Found&w=150&h=150&txttrack=0"
    },
    description: {
        type: String,
        required: true
    },
    upvotes: {
        type: Number,
        default: 0
    },
    downvotes: {
        type: Number,
        default: 0
    }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = {Article}