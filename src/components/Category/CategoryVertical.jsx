import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {HTTP} from '../../constants/contants';
import VerticalArticle from '../article/VerticalArticle';

class CategoryVertical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArticle: []
        }
    }

    get_news_by_category() {
        fetch(`${HTTP.GET_NEWS_BY_CATEGORY}/${this.props.Page}/${this.props.Category[0]}/12`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ listArticle: data['results'] });
            });
    }
    componentWillMount() {         
        this.get_news_by_category();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.Category !== this.props.Category){
            this.get_news_by_category();
        }
    }
    render() {
        return (
            <div className="single_post_content">
                <h2><span>{this.props.Category[1]}</span></h2>
                {
                    this.state.listArticle.map((article, index) =>{
                        return (
                            <VerticalArticle Article={article} key={index}/>
                        )
                    })
                }
            </div>

        );
    }
}

CategoryVertical.propTypes = {
    Category: PropTypes.array
};

export default CategoryVertical;