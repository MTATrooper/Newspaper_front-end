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
        fetch(`${HTTP.GET_NEWS_BY_CATEGORY}/${this.props.Page}/${this.props.Category[0]}/${this.props.ArticleNumber}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
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
                <a href={`${this.props.Page}/${this.props.Category[0]}`} style={{color: '#088A08'}}>Xem thêm &gt;&gt; </a>
            </div>

        );
    }
}

CategoryVertical.propTypes = {
    Category: PropTypes.array,
    Page: PropTypes.string,
    ArticleNumber: PropTypes.number
};

export default CategoryVertical;