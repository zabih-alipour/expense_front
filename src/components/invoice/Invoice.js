import React from "react";
import './Invoice.css'
import '../subject/Subject'
import './InvoiceList'
import Subject from "../subject/Subject";
import InvoiceList from "./InvoiceList";
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
                        <Subject onClick={(p)=>this.filterItem(p)}/>
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