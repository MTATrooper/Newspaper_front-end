import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HTTP } from '../../constants/contants';
import CategoriesHeader from '../../components/CategoriesHeader/CategoriesHeader';
import Clock from '../../components/clock/Clock';
import SelectPage from '../../components/SelectPage/SelectPage';
import Footer from '../../components/footer/Footer';
import HorizontalArticle from '../../components/article/HorizontalArticle';
import SearchBox from '../../components/searchBox/SearchBox';
import Pagination from '../../components/pagination/Pagination';
import './Category.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: null,
            categories: [],
            listArticle: {},
            currentDate: ''
        };
        this.selectDate = this.selectDate.bind(this);
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
                let articles = {};
                data['results'].map(article => {
                    let key = article['date'].split(' ')[0];
                    if (!(key in articles)) {
                        articles[key] = [];
                        articles[key].push(article);
                    }
                    else {
                        articles[key].push(article);
                    }
                })
                this.setState({ listArticle: articles });
            });
    }

    validateDate(date) {
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();

        date = yyyy + '/' + mm + '/' + dd;
        return date;
    }

    showDate(date){
        date = date.split('/');
        var dd = date[2];
        var mm = date[1];
        var yyyy = date[0];
        return dd + '/' + mm + '/' + yyyy;
    }

    selectDate(){
        var dateSelected = document.getElementById('datePicker').value;
        dateSelected = dateSelected.replace(/-/g, '/');
        this.setState({currentDate: dateSelected});
    }

    chosePage = (event) => {
        if (event.target.id === '<<') {
            let curDate = new Date(this.state.currentDate);
            let nextDate = new Date(curDate);
            nextDate.setDate(nextDate.getDate() + 1);
            this.setState({ currentDate: this.validateDate(nextDate) });
        }
        else if (event.target.id === '>>') {
            let curDate = new Date(this.state.currentDate);
            let prevDate = new Date(curDate);
            prevDate.setDate(prevDate.getDate() - 1);
            this.setState({ currentDate: this.validateDate(prevDate) });
        }
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.get_categories(this.props.match.params.page);
        this.get_news_by_category(this.props.match.params.page, this.props.match.params.category);
        let now = new Date();
        this.setState({ currentDate: this.validateDate(now) });
        this.setState({ timer: setTimeout(() => window.location.reload(false), 1800000) });
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    render() {
        const currentTodos = this.state.currentDate in this.state.listArticle ? (Object.keys(this.state.listArticle).length !== 0 ? this.state.listArticle[this.state.currentDate] : [])
        : [];
        const renderTodos = currentTodos.length !== 0 ? currentTodos.map((todo, index) => {
            return <HorizontalArticle Article={todo} key={index} />;
        }) : <div><p>Không có bài viết nào</p></div>;
        const pageNumbersShow = ['<<', '>>']; //Các số trang hiển thị
        return (
            <div>
                <div id="preloader">
                    <div id="status">&nbsp;</div>
                </div>
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
                    <div className="col-md-7" style={{ padding: 0}}>
                        <Pagination PageNumbersShow={pageNumbersShow} CurrentPage={this.state.currentPage} ChosePage={this.chosePage} />
                    </div>
                    <div className="col-md-5" style={{ padding: 0}}>
                        <div className="dateBox">
                            <label>Chọn ngày:</label>
                            <input id='datePicker' type='date' value={this.state.currentDate.replace(/\//g, '-')} onChange={this.selectDate} />
                        </div>
                    </div>
                    <section id="contentSection">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="single_post_content">
                                    <h2><span>{this.showDate(this.state.currentDate)}</span></h2>
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