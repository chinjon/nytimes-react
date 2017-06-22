import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
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
    }

    renderSavedArticles(articles) {
        const {savedArticles} = this.state;
        if(savedArticles.length > 0) {
            return (
                <div>
                    {
                        savedArticles.map((item,i)=> {
                            return <p key={i}>{item.title}</p>
                        })
                    }
                </div>
            )
        }
    }

    render() {
        return (
            <Container>
                {this.renderSavedArticles(this.state.savedArticles)}
            </Container>
        )
    }
}