
import React, { Component } from 'react';
import PropTypes from "prop-types";

// importing components from components 
import Title from './components/Title';
import Greetings from './components/common';


const user = {
    firstName: 'Abhishek',
    lastName: 'Bose'
};


// see Welcometo starts with a capital letter
// to make it a component to be called from an element
class Welcometo extends Component {
    render() {
        return (
            <div>
                <Title data={this.props.title} />
                <h1>Welcome to {this.props.name}</h1>
                <h2>{Greetings(user)}</h2>
            </div >
        );
    }
}

Welcometo.propTypes = {
    name: PropTypes.string.isRequired, // must be a string and defined
    title: PropTypes.string.isRequired, // must be a string and defined
};

// exporting component `Welcometo` as a public API
export default Welcometo