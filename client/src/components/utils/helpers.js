import axios from 'axios';

const helpers = {

    loadSavedArticles: () => {
        return new Promise((resolve, reject) => {
            axios.get('/api/articles').then(res => {
                    resolve(res.data);
                }).then((res) => res)
                .catch((error) => reject(error.res.data));
        });
    },

    saveArticle: (article) => {
        console.log('saveArticle is running');

        return new Promise((resolve, reject) => {
            axios.post('/api/articles', article).then(res => {
                    resolve(res.data);
                }).then((res) => res)
                .catch((error) => reject(error.res.data));
        });
    },

    deleteSavedArticle: (articleId) => {
        console.log('deletedSavedArticle running');

        return new Promise((resolve, reject) => {
            axios.delete(`/api/articles/${articleId}`).then(res => {
                resolve(res.data);
            }).then((res) => res).catch((error) => reject(error.res.data))
        });
    },

    addUpvote: (articleId) => {
        return new Promise((resolve, reject) => {
            axios.put(`/api/articles/upvote/${articleId}`).then(res => {
                resolve(res.data);
            }).then(res => res).catch((error)=> reject(error.res.data))
        });
    },
    
    addDownvote: (articleId) => {
        return new Promise((resolve, reject) => {
            axios.put(`/api/articles/downvote/${articleId}`).then(res => {
                resolve(res.data);
            }).then((res) => res).catch((error) => reject(error.res.data))
        })
    }
}

module.exports = helpers;