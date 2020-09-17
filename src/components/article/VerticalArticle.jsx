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
                        <figure className="bsbig_fig"> <a href="pages/single_page.html" className="featured_img"> <img alt="" src="images/featured_img1.jpg" /> <span className="overlay" /> </a>
                            <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                        </figure>
                    </li>
                </ul>
            </div>
        );
    }
}

VerticalArticle.propTypes = {

};

export default VerticalArticle;