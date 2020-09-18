import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HorizontalArticle extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <li>
                <div className="media">
                    <b><a href={this.props.Article["link"]} className="catg_title"> {this.props.Article["title"]}</a> </b>
                    <a href={this.props.Article["link"]} className="media-left"> <img alt="" src={this.props.Article["image"]} /> </a>
                    <div className="media-body"> {"("+this.props.Article["sourceName"]+") "+this.props.Article["summary"]}</div>
                </div>
            </li>
        );
    }
}

HorizontalArticle.propTypes = {
    Article: PropTypes.object
};

export default HorizontalArticle;