import React, { PureComponent } from 'react';
import './App.css';
import Header from './Header.component';
import Footer from './Footer.component';
import Section from './Section.component';



class About extends PureComponent {

    render () {
        return (
            <div className="App">
                <Header />
                <Section >
                    <div className="App-section">
                        <p>about me</p>
                    </div>
                </Section>
                <Footer />
            </div>
        );
    }
}


export default About;