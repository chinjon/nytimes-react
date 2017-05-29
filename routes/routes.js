const routes = require('express').Router();

const {ObjectID} = require('mongodb');
const {Article} = require('./../models/article');

routes.get('/api/articles', (req, res) => {
    console.log("you've hit the route")
    res.send("This works")
})

module.exports = routes;