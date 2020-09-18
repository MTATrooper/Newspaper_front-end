import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HorizontalArticle from '../article/HorizontalArticle';

class SlideRight extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="latest_post">
                <h2><span>{this.props.Category[1]}</span></h2>
                <div className="latest_post_container">
                    <div id="prev-button"><i className="fa fa-chevron-up" /></div>
                    <ul className="latest_postnav" style={{ height: '400px' }}>
                        {
                            this.props.ListArticle.map((article, i)=>{
                                return (
                                    <HorizontalArticle Article = {article} key={i} />
                                );
                            })
                        }
                    </ul>
                    <div id="next-button"><i className="fa  fa-chevron-down" /></div>
                </div>
            </div>
        );
    }
}

SlideRight.propTypes = {
    Category: PropTypes.array,
    ListArticle: PropTypes.array,
    Count: PropTypes.number
};

export default SlideRight;