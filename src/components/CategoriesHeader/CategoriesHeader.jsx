import React, { Component } from 'react';
import PropTypes from 'prop-types';



class CategoriesHeader extends Component {
    constructor(props) {
        super(props);

    }

    // componentDidUpdate(prevProps) {
    //     // only update if not match I don't know what's your data is so add a 
    //     // simple check like we use for strings.
    //       if (prevProps.Page !== this.props.Page) {
    //         this.get_categories();
    //       }
    //     }

    render() {
        return (
            <section id="navArea">
                <nav className="navbar navbar-inverse" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav main_nav">
                            <li className="active"><a href="/"><span className="fa fa-home desktop-home" /><span className="mobile-show">Home</span></a></li>
                            {
                                this.props.Categories.map(category => {
                                    return (
                                        <li><a href={"/" + this.props.Page + '/' + category[0]}>{category[1]}</a></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </nav>
            </section>
        );
    }
}

CategoriesHeader.propTypes = {
    Page: PropTypes.string,
    Categories: PropTypes.array
};

export default CategoriesHeader;