import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlideArticle from '../article/SlideArticle';

class SlideLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content : [],
        }
    }

    // createListArt() {
    //     let tmp = [];
    //     for (let i = 0; i < this.props.Count; i++) {
    //         tmp.push(<SlideArticle Article={Object(this.props.ListArticle[i])}/>)
    //     }
    //     this.setState({content:tmp}); 
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.Count !== this.props.Count) {
    //         this.createListArt();
    //     }
    // }
    // componentWillMount(){
    //     this.createListArt();
    // }
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