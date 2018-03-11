import React, { PureComponent } from 'react';


class List extends PureComponent {
    render() {
        return(
            <ul>
                {this.props.items.map(item => (
                    <li key={item.Team}>
                        {item.Team} {item.Team_name}
                    </li>
                ))}
            </ul>

        )
    }
}

export default List;