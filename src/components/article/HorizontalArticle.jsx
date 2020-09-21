import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HorizontalArticle.css';

class HorizontalArticle extends Component {

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
                        
                        <div> <i>Nguồn: {this.props.Article["sourceName"]}</i></div>
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