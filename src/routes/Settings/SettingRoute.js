import React, { Fragment } from 'react';
import {Route} from 'react-router-dom';
import SettingAbout from './SettingAbout.component';



const SettingRoute = ({match}) => (
    <Fragment>
        <Route path={`${match.url}/about`} component={SettingAbout} />
    </Fragment>
);

export default SettingRoute;