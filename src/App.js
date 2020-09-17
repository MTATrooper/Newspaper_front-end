import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoriesHeader from './components/CategoriesHeader/CategoriesHeader';
import Clock from './components/clock/Clock';
import SelectPage from './components/SelectPage/SelectPage';
import SlideSection from './components/slideSection/SlideSection';
import CategoryVertical from './components/Category/CategoryVertical';
import CategoryHorizontal from './components/Category/CategoryHorizontal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dantri"
    };
    this.selectPage = this.selectPage.bind(this);
  }

  selectPage() {
    this.setState({ page: document.getElementById('select_page').value });
  }

  render() {
    return (
      <div>
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
        <a className="scrollToTop" href="#"><i className="fa fa-angle-up" /></a>
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
          <CategoriesHeader Page={this.state.page} />
          <SlideSection />
          <section id="contentSection">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="left_content">
                  <CategoryVertical/>
                  <CategoryHorizontal/>
                </div>
              </div>
              
            </div>
          </section>
          <footer id="footer">
            <div className="footer_top">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="footer_widget wow fadeInLeftBig">
                    <h2>Flickr Images</h2>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="footer_widget wow fadeInDown">
                    <h2>Tag</h2>
                    <ul className="tag_nav">
                      <li><a href="#">Games</a></li>
                      <li><a href="#">Sports</a></li>
                      <li><a href="#">Fashion</a></li>
                      <li><a href="#">Business</a></li>
                      <li><a href="#">Life &amp; Style</a></li>
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">Photo</a></li>
                      <li><a href="#">Slider</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                  <div className="footer_widget wow fadeInRightBig">
                    <h2>Contact</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <address>
                      Perfect News,1238 S . 123 St.Suite 25 Town City 3333,USA Phone: 123-326-789 Fax: 123-546-567
                    </address>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bottom">
              <p className="copyright">Copyright © 2045 <a href="index.html">NewsFeed</a></p>
              <p className="developer">Developed By Wpfreeware</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;