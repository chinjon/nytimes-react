const routes = require('express').Router();
const _ = require('lodash');

const {ObjectID} = require('mongodb');
const {Article} = require('./../models/article');

routes.get('/api/test', (req, res) => {
    console.log("you've hit the route")
    res.send("This works")
});

routes.get("/api/articles", (req, res) => {
    Article.find({}, (err, articles) => {
        err ? res.status(400).send() : res.json(articles)
    });
});

routes.post("/api/articles", (req, res) => {
    let article = new Article({
        articleId: req.body.articleId,
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        multimedia: req.body.multimedia
    });

    article.save().then((item) => {
        res.send(item);
    }, (e) => {
        res.status(400).send(e);
    });
});

routes.delete("/api/articles/:id", (req, res) => {
    let articleId = req.params.id;

    if(!ObjectID.isValid(articleId)) {
        return res.status(404).send();
    };

    Article.findOneAndRemove({articleId}).then((article) => {
        if(!article) {
           return res.status(404).send();
        }
        res.send({article});
    }).catch((e) => {
       return res.status(400).send(e);
    })
});

routes.put('/api/articles/:action/:id', (req, res) => {
    let action = req.params.action;
    let articleId = req.params.id;

    if(!ObjectID.isValid(articleId)) {
        console.log('not found')
        return res.status(404).send();
    };

    if(action.toLowerCase() === "upvote") {
        Article.findOneAndUpdate({articleId}, {$inc: {upvotes: 1}}, {new: true}).then((article) => {
            !article ? res.status(404).send() : res.send(article)
        }).catch(e => {
            res.status(400).send(e);
        })
    } else if(action.toLowerCase() === "downvote") {
        Article.findOneAndUpdate({articleId}, {$inc: {downvotes: 1}}).then((article) => {
            !article ? res.status(404).send() : res.send(article)
        }).catch(e => {
            res.status(400).send(e);
        })
    }

})

module.exports = routes;