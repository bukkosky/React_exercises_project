import React, { PureComponent } from 'react';
import './section.style.css';
import PropTypes from 'prop-types'
import BottomSection from '../bottom-section/BottomSection.component'

class Section extends PureComponent {
    static propTypes = {
        bottomSectionVisability: PropTypes.bool.isRequired,
    };

    static defaultProps = {
        bottomSectionVisability: false,
    };


    render() {
        return(
            <section>
                {this.props.children}
                {this.props.bottomSectionVisability ? <BottomSection/> : ''}
            </section>
        );
    }
}

export default Section;