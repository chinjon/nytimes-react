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

    saveArticle: () => {
        console.log('saveArticle is running');

        return new Promise((resolve, reject) => {
            axios.post('/api/articles').then(res => {
                console.log('saving article');
                resolve(res.data);
            }).then((response) => console.log(response))
            .catch((error) => console.log(error));
        })
    }

}

module.exports = helpers;