import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Categories from './components/Categories/Categories';
import Clock from './components/clock/Clock';
import SelectPage from './components/SelectPage/SelectPage';
import SlideSection from './components/slideSection/SlideSection';

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
          <Categories Page={this.state.page} />
          <SlideSection />
          <section id="contentSection">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="left_content">
                  <div className="single_post_content">
                    <h2><span>Giáo dục - khuyến học</span></h2>
                    <div className="single_post_content_left">
                      <ul className="business_catgnav wow fadeInDown">
                        <li>
                          <figure className="bsbig_fig"> <a href="pages/single_page.html" className="featured_img"> <img alt="" src="images/featured_img1.jpg" /> <span className="overlay" /> </a>
                            <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                          </figure>
                        </li>
                      </ul>
                    </div>
                    <div className="single_post_content_left">
                      <ul className="business_catgnav  wow fadeInDown">
                        <li>
                          <figure className="bsbig_fig"> <a href="pages/single_page.html" className="featured_img"> <img alt="" src="images/featured_img1.jpg" /> <span className="overlay" /> </a>
                            <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                          </figure>
                        </li>
                      </ul>
                    </div>
                    <div className="single_post_content_left">
                      <ul className="business_catgnav  wow fadeInDown">
                        <li>
                          <figure className="bsbig_fig"> <a href="pages/single_page.html" className="featured_img"> <img alt="" src="images/featured_img1.jpg" /> <span className="overlay" /> </a>
                            <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                          </figure>
                        </li>
                      </ul>
                    </div>
                    <div className="single_post_content_left">
                      <ul className="business_catgnav  wow fadeInDown">
                        <li>
                          <figure className="bsbig_fig"> <a href="pages/single_page.html" className="featured_img"> <img alt="" src="images/featured_img1.jpg" /> <span className="overlay" /> </a>
                            <figcaption> <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> </figcaption>
                            <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                          </figure>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fashion_technology_area">
                    <div className="fashion">
                      <div className="single_post_content">
                        <h2><span>Fashion</span></h2>
                        
                        <ul className="spost_nav">
                          <li>
                            <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img1.jpg" /> </a>
                              <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> </div>
                            </div>
                          </li>
                          <li>
                            <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img2.jpg" /> </a>
                              <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> </div>
                            </div>
                          </li>
                          <li>
                            <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img1.jpg" /> </a>
                              <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a> </div>
                            </div>
                          </li>
                          <li>
                            <div className="media wow fadeInDown"> <a href="pages/single_page.html" className="media-left"> <img alt="" src="images/post_img2.jpg" /> </a>
                              <div className="media-body"> <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
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