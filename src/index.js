import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home.component';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About.component';
import Contact from './Contact.component';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
