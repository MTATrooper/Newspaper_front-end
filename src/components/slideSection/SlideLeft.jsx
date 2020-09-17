import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideArticle from '../article/SlideArticle';

class SlideLeft extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        let listArticle = [];
        for (let i = 0; i < 4; i++) {
            listArticle.push(<SlideArticle/>);
        }
        return (
            <div className="slick_slider">
                {listArticle}
            </div>
        );
    }
}

SlideLeft.propTypes = {

};

export default SlideLeft;