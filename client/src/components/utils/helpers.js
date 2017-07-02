import axios from 'axios';

const helpers = {

    loadSavedArticles: () => {
        console.log('loadSavedArticles is running');

        return new Promise((resolve, reject) => {
            axios.get('/api/articles').then(res => {
                    console.log('getting articles')
                    console.log(res.data);
                    resolve(res.data);
                }).then((response) => console.log(response))
                .catch((error) => console.log(error));
        });
    },

    saveArticle: (article) => {
        console.log('saveArticle is running');

        return new Promise((resolve, reject) => {
            axios.post('/api/articles', article).then(res => {
                    console.log('saving article');
                    resolve(res.data);
                }).then((response) => console.log(response))
                .catch((error) => reject(error.response.data));
        });
    },

    deleteSavedArticle: (articleId) => {
        console.log('deletedSavedArticle running');

        return new Promise((resolve, reject) => {
            axios.delete(`/api/articles/${articleId}`).then(res => {
                console.log('deleted article');
                resolve(res.data);
            }).then((response) => console.log(response)).catch((error) => reject(error.response.data))
        });
    },

    addUpvote: (articleId) => {
        console.log('upvote running');

        return new Promise((resolve, reject) => {
            axios.patch(`/api/articles/upvote/${articleId}`).then(res => {
                console.log('article upvoted');
                resolve(res.data);
            }).then(response => console.log(response)).catch(error=> reject(error.response.data))
        });
    }

}

module.exports = helpers;