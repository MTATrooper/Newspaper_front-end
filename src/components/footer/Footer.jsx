import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <footer id="footer">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer_widget wow fadeInLeftBig">
                                <h2>Hỗ trợ người dùng đọc tin</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer_widget wow fadeInDown">
                                <h2>Tag</h2>
                                <ul className="tag_nav">
                                    {
                                        this.props.Tags.map((tag) => {
                                            return (
                                                <li><a href={"/" + this.props.Page + '/' + tag[0]}>{tag[1]}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="footer_widget wow fadeInRightBig">
                                <h2>Contact</h2>
                                <p>Phạm Đức Long - Khoa Công nghệ thông tin - Học viện Kỹ thuật Quân sự</p>
                                <address>
                                    236 Hoàng Quốc Việt, Cầu Giấy, Hà Nội<br/> Phone: 0983.481.417
                                </address>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <p className="copyright">Copyright by <a href="https://www.facebook.com/duclong.10.11">Phạm Đức Long - Học viện KTQS</a></p>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    Page: PropTypes.string,
    Tags: PropTypes.array
};

export default Footer;