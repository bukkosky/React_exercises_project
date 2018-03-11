import React, { PureComponent } from 'react';
import './header.style.css';
import PropTypes from 'prop-types';
import SubMenu from '../../components/sub-menu/SubMenu';


class Header extends PureComponent {
    static propTypes = {
        name: PropTypes.string,
        ver: PropTypes.string,
    };

    static defaultProps = {
        name: "example aplication title",
        ver: "v.1.0.0."
    };


    state = {
        menuVisibility: false,
    };

    toggleMenu = () => {
        this.setState({
            menuVisibility: !this.state.menuVisibility,
        })
    };

    render() {
        return (
            <header className="App-header">
                <div>
                    {this.props.name} {this.props.ver}
                </div>
                <button onClick={() => this.toggleMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <SubMenu menuVisibility={this.state.menuVisibility} />

            </header>

        );
    }
}

export default Header;