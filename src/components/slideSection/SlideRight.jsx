import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HorirontalArticle from '../article/HorirontalArticle';

class SlideRight extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        let listArticle = [];
        for (let i = 0; i < 4; i++) {
            listArticle.push(<li>
                <HorirontalArticle/>
            </li>);
        }
        return (
            <div className="latest_post">
                <h2><span>Latest post</span></h2>
                <div className="latest_post_container">
                    <div id="prev-button"><i className="fa fa-chevron-up" /></div>
                    <ul className="latest_postnav" style={{ height: '400px' }}>
                        {listArticle}
                    </ul>
                    <div id="next-button"><i className="fa  fa-chevron-down" /></div>
                </div>
            </div>
        );
    }
}

SlideRight.propTypes = {

};

export default SlideRight;