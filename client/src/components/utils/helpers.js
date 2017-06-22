import axios from 'axios';

const helpers = {
    loadSavedArticles: () => {
        console.log('loadSavedArticles is running');

        return new Promise((resolve, reject) => {
            axios.get('/api/articles').then(res=> {
                console.log('getting articles')
                console.log(res);
                resolve(res);
            })
        })
    }
}