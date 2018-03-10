import React, { PureComponent } from 'react';
import './App.css';
import Header from './Header.component';
import Footer from './Footer.component';
import Section from './Section.component';



class Contact extends PureComponent {

    render () {
        return (
            <div className="App">
                <Header />
                <Section>
                    <div className="App-section">
                        <p>Contact Us</p>
                    </div>
                </Section>
                <Footer />
            </div>

        );
    }
}


export default Contact;