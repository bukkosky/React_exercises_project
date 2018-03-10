import React, { PureComponent } from 'react';


class Section extends PureComponent {
    render() {
        return(
            <section>
                {this.props.children}
            </section>
        )
    }
}

export default Section;