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
import Pagination from '../../components/pagination/Pagination';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            inputSearch: '',
            listArticle: [],
            currentPage: 1,
            newsPerPage: 20,
            pageNumberRender: {
                minPage: 1,
                maxPage: 2,
                count: 2
            }
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
        this.setState({timer : setTimeout(() => window.location.reload(false), 1800000)});
    }

    chosePage = (event) => {
        if (event.target.id === '<<') {
            if (this.state.currentPage - 1 < this.state.pageNumberRender['minPage']) {
                this.setState({
                    pageNumberRender: {
                        minPage: this.state.currentPage - 1,
                        maxPage: this.state.pageNumberRender['maxPage'] - 1,
                        count: this.state.pageNumberRender['count']
                    }
                })
            }
            this.setState({ currentPage: this.state.currentPage - 1 });
        }
        else if (event.target.id === '>>') {
            if (this.state.currentPage + 1 > this.state.pageNumberRender['maxPage']) {
                this.setState({
                    pageNumberRender: {
                        minPage: this.state.pageNumberRender['minPage'] + 1,
                        maxPage: this.state.pageNumberRender['maxPage'] + 1,
                        count: this.state.pageNumberRender['count']
                    }
                })
            }
            this.setState({ currentPage: this.state.currentPage + 1 });
        }
        else {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }
        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
      }

    render() {
        const currentPage = this.state.currentPage;
        const newsPerPage = this.state.newsPerPage;
        const indexOfLastNews = currentPage * newsPerPage;
        const indexOfFirstNews = indexOfLastNews - newsPerPage;
        const currentTodos = this.state.listArticle.slice(indexOfFirstNews, indexOfLastNews);
        const renderTodos = this.state.listArticle.length > 0 ? currentTodos.map((todo, index) => {
            return <HorizontalArticle Article={todo} key={index} />;
        }) : <div> <p>Không có bài nào</p> </div>;
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
                                    <SearchBox Input={queryString.parse(this.props.location.search)['input']} />
                                    <Clock />
                                </div>
                            </div>
                        </div>
                    </header>
                    <CategoriesHeader Page={this.props.match.params.page} Categories={[]} />
                    <Pagination PageNumbersShow={pageNumbersShow} CurrentPage={this.state.currentPage} ChosePage={this.chosePage} />
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
                    <Pagination PageNumbersShow={pageNumbersShow} CurrentPage={this.state.currentPage} ChosePage={this.chosePage} />
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