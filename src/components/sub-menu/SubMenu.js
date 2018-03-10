import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';

class SubMenu extends PureComponent {
    render() {
        return(
            <div>
                <Link to="/">Strona startowa /</Link>
                <Link to="/contact">Contact Me /</Link>
                <Link to="/about">About Me /</Link>
            </div>
        )
    }
}

export default SubMenu;