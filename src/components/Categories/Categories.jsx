import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HTTP } from '../../constants/contants';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        }

    }

    get_categories() {
        fetch(`${HTTP.GET_CATEGORIES}${this.props.Page}`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            this.setState({ categories: Object.values(data) });
        });
    }
    componentDidMount() {
        this.get_categories();
    }


    componentDidUpdate(prevProps) {
        // only update if not match I don't know what's your data is so add a 
        // simple check like we use for strings.
          if (prevProps.Page !== this.props.Page) {
            this.get_categories();
          }
        }

    render() {
        return (
            <section id="navArea">
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav main_nav">
                            <li className="active"><a href="index.html"><span className="fa fa-home desktop-home" /><span className="mobile-show">Home</span></a></li>
                            {
                                this.state.categories.map(category => {
                                    return (
                                        <li><a href="#">{category}</a></li>
                                    )
                                })
                            }
                            {/* <li className="active"><a href="index.html"><span className="fa fa-home desktop-home" /><span className="mobile-show">Home</span></a></li>
                        <li><a href="#">Xã hội</a></li>
                        <li><a href="#">Thế giới</a></li>
                        <li><a href="#">Kinh tế</a></li>
                        <li><a href="#">Văn hoá</a></li>
                        <li><a href="#">Giáo dục</a></li>
                        <li><a href="#">Thể thao</a></li>
                        <li><a href="#">Giải trí</a></li>
                        <li><a href="#">Pháp luật</a></li>
                        <li><a href="#">Công nghệ</a></li>
                        <li><a href="#">Khoa học</a></li>
                        <li><a href="#">Đời sống</a></li>
                        <li><a href="#">Nhà đất</a></li> */}
                        </ul>
                    </div>
                </nav>
            </section>
        );
    }
}

Categories.propTypes = {
    Page: PropTypes.string,
};

export default Categories;