import React, { Component } from 'react';
import logo from '../../Assets/vaius-group-logo.png';
import '../../App.css';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        )
    }
}

export default Header;