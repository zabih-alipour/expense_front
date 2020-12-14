import React from "react";
import './Menu.css'
import {Navbar, Nav} from 'react-bootstrap'

class Menu extends React.Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href={"/"} > مخارج </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item >خانه</Nav.Item>
                        <Nav.Link onSelect={() => this.props.onClick(1)}>ثبت خرید</Nav.Link>
                        <Nav.Link onSelect={() => this.props.onClick(2)}>گزارش</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu