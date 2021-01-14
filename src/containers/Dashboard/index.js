
import React, { Component } from 'react'
import axios from 'axios';
import styled from "styled-components"

const Div = styled.div`

    background-color: red;
    &:hover {
        background-color: blue;
    }
    &.bruh {
        color: pink !important;
    }
`

class Parent extends Component {
    state = {}
    componentDidMount = () => {
        axios.get("http://localhost:3004/user")
    }
    render() {
        return (
            <Div className="bruh-bro">
                <h1>Hi</h1>
            </Div>
        );
    }
}

export default Parent;