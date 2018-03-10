import React, { PureComponent } from 'react';
import './App.css';
import Header from './Header.component';
import Footer from './Footer.component';
import Section from './Section.component';
import {Link} from 'react-router-dom';


class Home extends PureComponent {
  render() {
    return (
      <div className="App">
        <Header />

          <Section>
              <div className="App-section">
                  <p>Nowa treść strony</p>
              </div>
          </Section>

          <Footer />
      </div>
    );
  }
}

export default Home;
