import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SlideArticle.css';

class SlideArticle extends Component {
    validateTime(time){
        let tmp = String(time);
        let hour = tmp.split(' ').length > 1 ? tmp.split(' ')[1]: '';
        let date = tmp.split(' ')[0];
        let date_split = date.split('/');
        return `${date_split[2]}/${date_split[1]}/${date_split[0]} ${hour}`;
    }
    render() {
        console.log('date', this.props.Article["date"]);
        return (
            <div className="single_iteam"> 
                <a href={this.props.Article["link"]} target="_blank" rel="noopener noreferrer"> 
                    <img src={this.props.Article["image"]} alt=""/>
                </a>
                <div className="slider_article">
                    <h2><a className="slider_tittle" href={this.props.Article["link"]} target="_blank" rel="noopener noreferrer">{this.props.Article["title"]}</a></h2>
                    <b>Hightlight:</b><br/>
                    <p title={this.props.Article["summary"]}>{this.props.Article["summary"]}</p>
                    <div> <i>Nguồn: {this.props.Article["sourceName"]}</i> <span>{this.validateTime(this.props.Article["date"])}</span></div>
                </div>
            </div>
        );
    }
}

SlideArticle.propTypes = {
    Article: PropTypes.object
};

export default SlideArticle;