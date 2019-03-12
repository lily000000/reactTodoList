import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Greeting extends React.Component {
    render() {
        return (
            <h1>hello,{this.props.name}</h1>
        )
    }
} 
Greeting.propTypes = {
    name: PropTypes.string
  };
  export default Greeting;