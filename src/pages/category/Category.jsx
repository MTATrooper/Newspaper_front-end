import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HTTP } from '../../constants/contants';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Clock from '../../components/clock/Clock';
import SelectPage from '../../components/SelectPage/SelectPage';
import Footer from '../../components/footer/Footer';
import HorizontalArticle from '../../components/article/HorizontalArticle';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            listArticle: []
        };
    }

    get_categories(page) {
        fetch(`${HTTP.GET_CATEGORIES}${page}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                var results = Object.keys(data).map(key => [key, data[key]]);;
                this.setState({ categories: results });
            });
    }

    get_news_by_category(page, category) {
        fetch(`${HTTP.GET_NEWS_BY_CATEGORY}/${page}/${category}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                this.setState({ listArticle: data['results'] });
            });
    }


    componentDidMount() {
        this.get_categories(this.props.match.params.page);
        this.get_news_by_category(this.props.match.params.page, this.props.match.params.category);
    }

    render() {
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
                                            <SelectPage ID={'select_page'} PageSelected={this.props.match.params.page} Disabled={1}/>
                                        </div>
                                    </div>
                                    <div className="header_top_midle">
                                        <input className="search_input" />
                                        <button className="btn-search">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                    <Clock />
                                </div>
                            </div>
                        </div>
                    </header>
                    <CategoriesHeader Page={this.props.match.params.page} Categories={this.state.categories} />
                    <section id="contentSection">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="left_content">
                                    <ul className="spost_nav">
                                        {
                                            this.state.listArticle.map((article, index) => {
                                                return (
                                                    <HorizontalArticle Article={article} key={index} />
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </section>
                    <Footer Page={this.props.match.params.page} Tags={this.state.categories} />
                </div>
            </div>

        );
    }
}

Category.propTypes = {
    page: PropTypes.string,
    category: PropTypes.string
};

export default Category;