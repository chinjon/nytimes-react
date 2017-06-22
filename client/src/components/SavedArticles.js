import React, {Component} from 'react';

import helpers from './utils/helpers';

export default class SavedArticles extends Component {
    constructor(props) {
        super(props);

        this.loadSavedArticles = this.loadSavedArticles.bind(this);

        this.state = {
            savedArticles: [],
        }

    }
    loadSavedArticles() {
        helpers.loadSavedArticles()
        .then(savedArticles => this.setState({savedArticles}))
        .catch(err=> {
            console.log(err)
        })
    }

    componentWillMount() {
        this.loadSavedArticles()

        console.log(this.state.savedArticles)
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}