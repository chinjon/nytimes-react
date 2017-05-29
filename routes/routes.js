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
        title: req.body.title,
        url: req.body.url,
        description: req.body.description
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

    Article.findByIdAndRemove(articleId).then((article) => {
        if(!article) {
           return res.status(404).send();
        }
        res.send({article});
    }).catch((e) => {
       return res.status(400).send(e);
    })
});

module.exports = routes;