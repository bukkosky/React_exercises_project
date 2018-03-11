import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routes/home/Home.component';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './routes/about/About.component';
import Contact from './routes/contact/Contact.component';
import registerServiceWorker from './registerServiceWorker';
import Api from './routes/ApiComponent/Api.component';
import SettingRoute from './routes/Settings/SettingRoute';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/api' component={Api} />
            <Route path='/settings' component={SettingRoute} />
        </div>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
