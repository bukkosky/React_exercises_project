import React, { PureComponent } from 'react';
import List from '../../components/ListComponent/List.component';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';


class Api extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentWillMount() {
        fetch('http://nflarrest.com/api/v1/team')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('result');
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(this.state);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    renderBody = () => {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div> Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading... </div>;
        } else {

            return (
                <List items={items}/>
            );
        }
    };

    render() {
        return (
            <div className="App">
                <Header />
                {this.renderBody()}
                <Footer />
            </div>
        );
    }
}

export default Api;