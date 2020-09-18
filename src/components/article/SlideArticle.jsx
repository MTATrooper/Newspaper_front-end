import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlideArticle extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="single_iteam"> <a href={this.props.Article["link"]}> <img src={this.props.Article["image"]} alt=""/></a>
                <div className="slider_article">
                    <h2><a className="slider_tittle" href={this.props.Article["link"]}>{this.props.Article["title"]}</a></h2>
                    <p>{this.props.Article["summary"]}</p>
                </div>
            </div>
        );
    }
}

SlideArticle.propTypes = {
    Article: PropTypes.object
};

export default SlideArticle;