import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HTTP } from '../../constants/contants';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Clock from '../../components/clock/Clock';
import SelectPage from '../../components/SelectPage/SelectPage';
import Footer from '../../components/footer/Footer';
import HorizontalArticle from '../../components/article/HorizontalArticle';
import SearchBox from '../../components/searchBox/SearchBox';
import './pagination.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            listArticle: [],
            currentPage: 1,
            newsPerPage: 20,
            pageNumberRender: {
                minPage : 1,
                maxPage: 5,
                count: 5
            }
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

    chosePage = (event) => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    componentDidMount() {
        this.get_categories(this.props.match.params.page);
        this.get_news_by_category(this.props.match.params.page, this.props.match.params.category);
    }

    render() {
        const currentPage = this.state.currentPage;
        const newsPerPage = this.state.newsPerPage;
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const currentTodos = this.state.listArticle.slice(indexOfFirstNews, indexOfLastNews);
        const renderTodos = currentTodos.map((todo, index) => {
            return <HorizontalArticle Article={todo} key={index} />;
        });
        const pageNumbersShow = []; //Các số trang hiển thị
        if (this.state.pageNumberRender['minPage'] > 1) pageNumbersShow.push('<<');
        const pageNumbers = Math.ceil(this.state.listArticle.length / newsPerPage);
        const maxPageRender = pageNumbers < this.state.pageNumberRender['maxPage'] ? pageNumbers : this.state.pageNumberRender['maxPage'];
        for (let i = this.state.pageNumberRender['minPage']; i <= maxPageRender; i++) {
            pageNumbersShow.push(i);
        }
        if (maxPageRender < pageNumbers) pageNumbersShow.push('>>');
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
                                    <SearchBox Input={''} />
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
                                            renderTodos
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="pagination-custom">
                        <ul id="page-numbers">
                            {
                                pageNumbersShow.map(number => {
                                    if (this.state.currentPage === number) {
                                        return (
                                            <li key={number} id={number} className="active">
                                                {number}
                                            </li>
                                        )
                                    }
                                    else {
                                        return (
                                            <li key={number} id={number} onClick={this.chosePage} >
                                                {number}
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
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