import React from "react";
import './Invoice.css'
import '../subject/Subject'
import './InvoiceList'
import Subject from "../subject/Subject";
import InvoiceList from "./InvoiceList";
import {Container, Row, Col} from 'react-bootstrap'

class Invoice extends React.Component {

    render() {
        return (
            <Container fluid={true}>
                <Row >
                    <Col xs={{span:3, order: "last"}}  >
                        <Subject />
                    </Col>
                    <Col xs={{span:9, order: "first"}} >
                        <InvoiceList/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Invoice