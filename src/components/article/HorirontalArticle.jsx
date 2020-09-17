import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HorirontalArticle extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/slider_img4.jpg" /> </a>
                <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> </div>
            </div>
        );
    }
}

HorirontalArticle.propTypes = {

};

export default HorirontalArticle;