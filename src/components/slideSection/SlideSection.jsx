import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';

class SlideArticle extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section id="sliderSection">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <SlideLeft />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <SlideRight />
                    </div>
                </div>
            </section>
        );
    }
}

SlideArticle.propTypes = {

};

export default SlideArticle;