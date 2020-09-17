import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SlideArticle extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="single_iteam"> <a href="pages/single_page.html"> <img src="images/slider_img4.jpg" alt="" /></a>
                <div className="slider_article">
                    <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis sit amet</a></h2>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a pharetra urna. Morbi dui...</p>
                </div>
            </div>
        );
    }
}

SlideArticle.propTypes = {

};

export default SlideArticle;