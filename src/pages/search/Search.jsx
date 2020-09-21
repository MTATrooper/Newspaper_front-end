import React, { Component } from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { HTTP } from '../../constants/contants';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Clock from '../../components/clock/Clock';
import SelectPage from '../../components/SelectPage/SelectPage';
import Footer from '../../components/footer/Footer';
import HorizontalArticle from '../../components/article/HorizontalArticle';
import SearchBox from '../../components/searchBox/SearchBox';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSearch: '',
            listArticle: []
        };
    }

    search(input) {
        fetch(`${HTTP.SEARCH_NEWS}/${input}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                this.setState({ listArticle: data['results'] });
            });
    }

    componentDidMount() {
        let input = queryString.parse(this.props.location.search);
        this.search(input["input"]);
    }

    render() {
        let listArticle = [];
        if (this.state.listArticle.length > 0){
            this.state.listArticle.map((article, index) => {
                listArticle.push(<HorizontalArticle Article={article} key={index} />)
            })
        }
        else{
            listArticle.push(<div>
                <p>Không có bài nào</p>
            </div>)
        }
        return (
            <div>
                <div id="preloader">
                    <div id="status">&nbsp;</div>
                </div>
                {/* <a className="scrollToTop" href="#"><i className="fa fa-angle-up" /></a> */}
                <div className="container" style={{ width: '80%' }}>
                    <header id="header">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12" style={{ marginBottom: '5px' }}>
                                <div className="header_top">
                                    <div className="header_top_left">
                                        <div className="col-md-5">
                                            <h2 className="page_title" style={{ color: '#088A08', fontFamily: 'Arial Black', fontWeight: 'bold' }}>Đọc báo</h2>
                                        </div>
                                        <div className="col-md-7">
                                            <SelectPage ID={'select_page'} PageSelected={this.props.match.params.page} Disabled={1} />
                                        </div>
                                    </div>
                                    <SearchBox Input={queryString.parse(this.props.location.search)['input']}/>
                                    <Clock />
                                </div>
                            </div>
                        </div>
                    </header>
                    <CategoriesHeader Page={this.props.match.params.page}  Categories={[]}/>
                    <section id="contentSection">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="left_content">
                                    <ul className="spost_nav">
                                        {
                                            listArticle
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>
                    <Footer Page={this.props.match.params.page} Tags={[]} />
                </div>
            </div>
        );
    }
}

Search.propTypes = {
    search: PropTypes.string
};

export default withRouter(Search);