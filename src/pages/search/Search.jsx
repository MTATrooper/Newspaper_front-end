import React, { Component } from 'react';
import { useHistory } from "react-router";
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        let history = useHistory();
        alert(this.props.inputSearch);
        history.push(`/search?input=${this.props.inputSearch}`);
    }

    render() {
        
        return (
            <div>
                <p>{this.props.inputSearch}dfsdfds</p>
            </div>
        );
    }
}

Search.propTypes = {

};

export default Search;