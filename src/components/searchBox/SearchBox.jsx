import React, { Component } from 'react';

class SearchBox extends Component {
    search = () => {
        let search_val = document.getElementById('search_input').value;
        window.location.href = `/search?input=${search_val}`;
    }
    OnKeyUp = (event) => {
        let search_val = document.getElementById('search_input').value;
        if (event.keyCode === 13) {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            window.location.href = `/search?input=${search_val}`;
        }
    }

    render() {
        return (
            <div className="header_top_midle">
                <input id='search_input' className="search_input" placeholder="Tìm kiếm" onKeyUp={this.OnKeyUp} defaultValue={this.props.Input} />
                <button className="btn-search" onClick={this.search}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
        );
    }
}

export default SearchBox;