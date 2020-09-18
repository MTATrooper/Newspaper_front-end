import React, { Component } from 'react';
import { HTTP } from './constants/contants';
import CategoriesHeader from './components/CategoriesHeader/CategoriesHeader';
import Clock from './components/clock/Clock';
import SelectPage from './components/SelectPage/SelectPage';
import SlideSection from './components/slideSection/SlideSection';
import CategoryVertical from './components/Category/CategoryVertical';
import CategoryHorizontal from './components/Category/CategoryHorizontal';
import Footer from './components/footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dantri",
      categories: [],
    };
    this.selectPage = this.selectPage.bind(this);
  }

  get_categories(page) {
    fetch(`${HTTP.GET_CATEGORIES}${page}`, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        var results = Object.keys(data).map(key => [key, data[key]]);;
        this.setState({ categories: results });
      });
  }

  selectPage() {
    var page = document.getElementById('select_page').value;
    this.setState({ page: page });
    this.get_categories(page);
  }

  componentDidMount() {
    this.get_categories(this.state.page);
  }
  render() {
    var event=[], i=0;
    let listCategories = [];
    this.state.categories.map(category => {
      if (category[1].toLowerCase() === "thời sự"){
        event = category;
      }
      else {
        listCategories.push(category);
      }
    })
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
                      <SelectPage ID={'select_page'} OnChange={this.selectPage} />
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
          <CategoriesHeader Page={this.state.page} Categories={this.state.categories} />
          <SlideSection Page={this.state.page} Category={event}/>
          <section id="contentSection">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="left_content">
                  {
                    listCategories.map(category =>{
                      if (i % 2 === 0){
                        i++;
                        return <CategoryVertical Page={this.state.page} Category={category}/>
                      }
                      else{
                        i++;
                        return <CategoryHorizontal Page={this.state.page} Category={category}/>
                      }
                    })
                  }
                </div>
              </div>

            </div>
          </section>
          <Footer Page={this.state.page} Tags = {this.state.categories}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;