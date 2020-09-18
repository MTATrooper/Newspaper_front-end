import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VerticalArticle.css';

class VerticalArticle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="single_post_content_left wow fadeInDown">
                <ul className="business_catgnav wow fadeInDown" style={{height: '100%'}}>
                    <li>
                        <figure className="bsbig_fig"> <a href={this.props.Article["link"]} className="featured_img" target="_blank"> <img alt="" src={this.props.Article["image"]} /> <span className="overlay" /> </a>
                            <figcaption><b> <a href={this.props.Article["link"]} target="_blank">{this.props.Article["title"]}</a> </b></figcaption>
                            <b>Hightlight:</b><br/>
                            <ul className="summary">
                                {
                                    this.props.Article["summary"].map((articleSummary, i) =>{
                                        return <li key={i}>{"-"+ articleSummary}</li>
                                    })
                                }
                            </ul>
                            <div className="source"> <i>Nguồn: {this.props.Article["sourceName"]}</i></div>
                        </figure>
                    </li>
                </ul>
            </div>
        );
    }
}

VerticalArticle.propTypes = {
    Article: PropTypes.object
};

export default VerticalArticle;