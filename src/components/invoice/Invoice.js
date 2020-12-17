import React from "react";
import './Invoice.css'
import '../subject/SubjectList'
import './InvoiceList'
import SubjectList from "../subject/SubjectList";
import InvoiceList from "./InvoiceList";
import {Col, Container, Row} from 'react-bootstrap'

class Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubject: 0
        }
    }

    filterItem(selectedItem) {
        this.setState({
            selectedSubject: selectedItem
        });
    }

    render() {
        return (
            <Container fluid={true} className={"mt-2"}>
                <Row>
                    <Col xs={{span: 3}}>
                        <SubjectList onClick={(p) => this.filterItem(p)}/>
                    </Col>
                    <Col xs={{span: 9}}>
                        <InvoiceList filterItems={this.state.selectedSubject}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Invoice