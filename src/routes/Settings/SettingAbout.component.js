import React, { PureComponent } from 'react';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';
import Section from '../../components/section/Section.component';



class SettingAbout extends PureComponent{

    render () {
        return (
            <div className="App">
                <Header />
                <Section >
                    <div className="App-section">
                        <p>about settings</p>
                    </div>
                </Section>
                <Footer />
            </div>
        );
    }
}


export default SettingAbout;