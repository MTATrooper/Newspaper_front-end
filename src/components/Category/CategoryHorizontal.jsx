import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryHorizontal extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="fashion_technology_area">
                <div className="fashion">
                    <div className="single_post_content">
                        <h2><span>Fashion</span></h2>

                        <ul className="spost_nav">
                            <li>
                                <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img1.jpg" /> </a>
                                    <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img2.jpg" /> </a>
                                    <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img1.jpg" /> </a>
                                    <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a> </div>
                                </div>
                            </li>
                            <li>
                                <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img2.jpg" /> </a>
                                    <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        );
    }
}

CategoryHorizontal.propTypes = {

};

export default CategoryHorizontal;