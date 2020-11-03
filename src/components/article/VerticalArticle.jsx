import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VerticalArticle.css';

class VerticalArticle extends Component {
    validateTime(time){
        let hour = time.split(' ').length > 1 ? time.split(' ')[1]: '';
        let date = time.split(' ')[0];
        let date_split = date.split('/');
        return `${date_split[2]}/${date_split[1]}/${date_split[0]} ${hour}`;
    }
    render() {
        return (
            <div className="single_post_content_left wow fadeInDown">
                <ul className="business_catgnav wow fadeInDown" style={{height: '100%'}}>
                    <li>
                        <figure className="bsbig_fig"> 
                            <a href={this.props.Article["link"]} className="featured_img" target="_blank" rel="noopener noreferrer"> 
                                <img alt="" src={this.props.Article["image"]} /> <span className="overlay" /> 
                            </a>
                            <figcaption>
                                <b> <a href={this.props.Article["link"]} target="_blank" rel="noopener noreferrer">{this.props.Article["title"]}</a> </b>
                            </figcaption>
                            <b>Hightlight:</b><br/>
                            <ul className="summary">
                                {
                                    this.props.Article["summary"].map((articleSummary, i) =>{
                                        return <li key={i}>{"- "+ articleSummary}</li>
                                    })
                                }
                            </ul>
                            <div className="source"> <i>Nguồn: {this.props.Article["sourceName"]}</i><span>{this.validateTime(this.props.Article["date"])}</span></div>
                        </figure>
                    </li>
                </ul>
            </div>
        );
    }
}

VerticalArticle.propTypes = {
    Article: PropTypes.object
};

export default VerticalArticle;