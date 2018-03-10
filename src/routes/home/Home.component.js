import React, { PureComponent } from 'react';
import '../../App.css';
import Header from '../../components/header/Header.component';
import Footer from '../../components/footer/Footer.component';
import Section from '../../components/section/Section.component';
import {Link} from 'react-router-dom';


class Home extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />

          <Section>Home Page</Section>

          <Section bottomSectionVisability={true}>
            treść
          </Section>
          <Footer />
      </div>
    );
  }
}

export default Home;
