import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideArticle from '../article/SlideArticle';

class SlideLeft extends Component {

    render() {
        let content = [];
        for (let i = 0; i < this.props.Count; i++) {
            content.push(<SlideArticle Article={Object(this.props.ListArticle[i])}/>)
        }
        return (
            <div className="slick_slider">
                {
                    content
                }
            </div>
        );
    }
}

SlideLeft.propTypes = {
    Category: PropTypes.array,
    ListArticle: PropTypes.array,
    Count: PropTypes.number
};

export default SlideLeft;