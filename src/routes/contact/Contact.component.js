import React, { PureComponent } from 'react';
import '../../App.css';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';
import Section from '../../components/section/Section.component';



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