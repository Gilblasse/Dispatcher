import React from 'react'
import { Navbar } from 'react-bootstrap'


export default function Navigation() {
    return (
        <nav>
            <Navbar className="nav-bar">
                <i class="large material-icons left text-muted">menu</i>
                <Navbar.Brand href="#home">Brand link</Navbar.Brand>
            </Navbar>
            
        </nav>

    )
}
