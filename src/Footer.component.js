import React, { PureComponent } from 'react';
import './App.css';
import PropTypes from 'prop-types';


const Footer = (props) => (
    <footer>{props.name} {props.date} {props.school}</footer>
);

Footer.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string,
    school: PropTypes.string,
};

Footer.defaultProps = {
    name: "Wszelkie prawa zastrzeżone",
    date: "2018",
};

export default Footer;