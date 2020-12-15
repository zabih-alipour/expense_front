import React from "react";
import './Menu.css'
import {Navbar, Nav} from 'react-bootstrap'

class Menu extends React.Component {

    render() {
        return (
            <Navbar bg="primary" variant="dark" expand={"lg"} sticky={"top"}>
                <Navbar.Brand href={"/"}> مخارج </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav justify-content-lg-center">
                    <Nav
                        className="justify-content-lg-center"
                        onSelect={(selectedKey) => this.props.onClick(selectedKey)}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey={"0"} >خانه</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"1"}>ثبت خرید</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"2"}>گزارش</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"3"}>ثبت آیتم جدید</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu