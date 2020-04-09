import React from 'react'
import { Navbar } from 'react-bootstrap'


export default function Navigation() {
    return (
        <nav>
            <Navbar className="nav-bar">
                <button className="hamburger hamburger--collapse " type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Navbar>
            
        </nav>

    )
}
