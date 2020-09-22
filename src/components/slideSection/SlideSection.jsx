import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';
import {HTTP} from '../../constants/contants';

class SlideArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listArticle: []
        }
    }

    get_news_by_category() {
        fetch(`${HTTP.GET_NEWS_BY_CATEGORY}/${this.props.Page}/${this.props.Category[0]}/10`, { method: "GET" })
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
            <section id="sliderSection">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <SlideLeft ListArticle={this.state.listArticle.slice(0, 4)} Count={4} Category={this.props.Category} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <SlideRight ListArticle={this.state.listArticle.slice(4, 10)} Count={6} Category={this.props.Category} />
                    </div>
                </div>
                <a href={`${this.props.Page}/${this.props.Category[0]}`} style={{color: '#088A08'}}>Xem thêm &gt;&gt; </a>
            </section>
        );
    }
}

SlideArticle.propTypes = {
    Page: PropTypes.string,
    Category: PropTypes.array,
};

export default SlideArticle;