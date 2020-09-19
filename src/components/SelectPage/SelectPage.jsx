import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HTTP } from '../../constants/contants'

class SelectPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages : [],
        }
    }

    componentDidMount() {
        fetch(`${HTTP.GET_PAGES}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                this.setState({ pages : data['results']});
            });
        if( this.props.Disabled === 1){
            document.getElementById(this.props.ID).disabled = true;
        }
    }

    render() {
        return (
            <select className="catgArchive" id = {this.props.ID} value={this.props.PageSelected} onChange={this.props.OnChange}>
                {
                    this.state.pages.map(page =>{
                        return (
                        <option value={page['name']}>{page['fullname']}</option>
                        )
                    })
                }
            </select>
        );
    }
}

SelectPage.propTypes = {
    ID: PropTypes.string,
    OnChange : PropTypes.func.isRequired,
    PageSelected: PropTypes.string,
    Disabled: PropTypes.number
};

export default SelectPage;