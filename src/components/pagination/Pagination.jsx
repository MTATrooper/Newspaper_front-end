import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    render() {
        return (
            <div className="pagination-custom">
                <ul className="page-numbers">
                    {
                        this.props.PageNumbersShow.map(number => {
                            if (this.props.CurrentPage === number) {
                                return (
                                    <li key={number} id={number} className="active">
                                        {number}
                                    </li>
                                )
                            }
                            else {
                                return (
                                    <li key={number} id={number} onClick={this.props.ChosePage} >
                                        {number}
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Pagination;