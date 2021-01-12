import './style.scss'

import React, { Component } from 'react'
import axios from 'axios';

class Parent extends Component {
    state = {}
    componentDidMount = () => {
        axios.get("http://localhost:3004/user")
    }
    render() {
        return (
            <h1>Hi</h1>
        );
    }
}

export default Parent;