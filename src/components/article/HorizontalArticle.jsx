import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HorizontalArticle.css';

class HorizontalArticle extends Component {
    validateTime(time){
        let hour = time.split(' ')[1];
        let date = time.split(' ')[0];
        let date_split = date.split('/');
        return `${date_split[2]}/${date_split[1]}/${date_split[0]} ${hour}`;
    }
    render() {
        return (
            <li>
                <div className="media">
                    <b><a href={this.props.Article["link"]} className="catg_title" target="_blank" rel="noopener noreferrer"> {this.props.Article["title"]}</a> </b>
                    <a href={this.props.Article["link"]} className="media-left" target="_blank" rel="noopener noreferrer"> <img alt="" src={this.props.Article["image"]} /> </a>
                    <div className="media-body"> 
                        <b>Hightlight:</b><br/>
                        <ul className="summary2">
                            {
                                this.props.Article["summary"].map((articleSummary, i) =>{
                                    return <li key={i} title={articleSummary}>{"- "+ articleSummary}</li>
                                })
                            }
                        </ul>
                        
                        <div> <i>Nguồn: {this.props.Article["sourceName"]}</i> <span className="time_write">{this.validateTime(this.props.Article["date"])}</span></div>
                    </div>
                    
                </div>
            </li>
        );
    }
}

HorizontalArticle.propTypes = {
    Article: PropTypes.object
};

export default HorizontalArticle;