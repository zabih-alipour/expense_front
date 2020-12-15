import React from "react";
import './Invoice.css'
import '../subject/SubjectList'
import './InvoiceList'
import SubjectList from "../subject/SubjectList";
import InvoiceList from "./InvoiceList";
import InvoiceAdd from "./InvoiceAdd";
import {Container, Row, Col} from 'react-bootstrap'

class Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubject: 0
        }
        // this.filterInvoices = this.filterItem.bind(this)
    }

    filterItem (selectedItem){
        this.setState({
            selectedSubject: selectedItem
        });
    }


    render() {
        console.log(this.state.selectedSubject)
        return (
            <Container fluid={true} className={"mt-2"}>
                <Row>
                    <Col xs={{span: 3}}>
                        <SubjectList onClick={(p)=>this.filterItem(p)}/>
                    </Col>
                    <Col xs={{span: 9}}>
                        <InvoiceAdd/>
                        <InvoiceList filterItems={this.state.selectedSubject}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Invoice