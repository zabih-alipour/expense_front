import React from "react";
import './Menu.css'
import '../invoice/InvoiceAdd'
import {Button, Nav, Navbar} from 'react-bootstrap'
import InvoiceAdd from "../invoice/InvoiceAdd";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects: []
        }
        this.getSubject()

    }

    state = {
        show: false
    }

    showModal() {
        this.setState({show: true})
    }

    closeModal() {
        this.setState({show: false})
    }

    getSubject() {
        fetch('/subjects')
            .then(res => res.json())
            .then(data => {
                this.setState({subjects: data});
            });
    }

    render() {
        const {show, subjects} = this.state
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
                            <Nav.Link eventKey={"home"}>خانه</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"subject"}>اقلام خرید</Nav.Link>
                        </Nav.Item><Nav.Item>
                        <Nav.Link eventKey={"invoice"}>صورت حساب</Nav.Link>
                    </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={"report"}>گزارش</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <Nav.Item>
                    <Button variant="outline-light"
                            onClick={() => this.showModal()}>فاکتور جدید</Button>
                    <InvoiceAdd
                        show={show}
                        subjects={subjects}
                        onHide={() => this.closeModal()}/>
                </Nav.Item>
            </Navbar>

        )
    }
}

export default Menu