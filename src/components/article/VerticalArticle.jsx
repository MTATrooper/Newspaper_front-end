import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VerticalArticle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="single_post_content_left wow fadeInDown">
                <ul className="business_catgnav  wow fadeInDown">
                    <li>
                        <figure className="bsbig_fig"> <a href={this.props.Article["link"]} className="featured_img"> <img alt="" src={this.props.Article["image"]} /> <span className="overlay" /> </a>
                            <figcaption><b> <a href="pages/single_page.html">{this.props.Article["title"]}</a> </b></figcaption>
                            <p title={this.props.Article["summary"]}>{this.props.Article["summary"]}</p>
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