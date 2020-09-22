import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HorizontalArticle from '../article/HorizontalArticle';
import { HTTP } from '../../constants/contants';

class CategoryHorizontal extends Component {
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
            <div className="fashion_technology_area">
                <div className="fashion">
                    <div className="single_post_content">
                        <h2><span>{this.props.Category[1]}</span></h2>

                        <ul className="spost_nav">
                            {
                                this.state.listArticle.map((article, index) =>{
                                    return (
                                        <HorizontalArticle Article={article} key={index}/>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <a href={`${this.props.Page}/${this.props.Category[0]}`} style={{color: '#088A08'}}>Xem thêm &gt;&gt; </a>
            </div>

        );
    }
}

CategoryHorizontal.propTypes = {
    Category: PropTypes.array,
    Page: PropTypes.string,
    ArticleNumber: PropTypes.number
};

export default CategoryHorizontal;