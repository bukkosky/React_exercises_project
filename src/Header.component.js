import React, { PureComponent } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



class Header extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        ver: PropTypes.string,
    };

    static defaultProps = {
        name: "example aplication title",
        ver: "v.1.0.0."
    };

    render() {
        return (
            <header className="App-header">
                <div>
                    {this.props.name} {this.props.ver}
                </div>
                <Link to="/">Strona startowa /</Link>
                <Link to="/contact">Contact Me /</Link>
                <Link to="/about">About Me /</Link>
            </header>

        );
    }
}

export default Header;