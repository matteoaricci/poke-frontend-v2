import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'

class NavBar extends Component {
    render() {
        return (
            
                <Navbar style={{fontSize: "20pt"}} bg="dark" variant="dark">
                    <Navbar.Brand href="#home">PokeBattle Sim</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="teams">Teams</Nav.Link>
                        <Nav.Link href="battle">Battles</Nav.Link>
                    </Nav>
                </Navbar>
            
        );
    }
}

export default NavBar;