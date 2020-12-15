import React from "react";
import '../invoice/Invoice.css'
import './SubjectList'
import '../invoice/InvoiceList'
import SubjectList from "./SubjectList";
import SubjectLineChart from "../report/SubjectLineChart";
import {Container, Row, Col} from 'react-bootstrap'

class Subject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSubject: 1
        }
    }

    filterItem (selectedItem){
        this.setState({
            selectedSubject: selectedItem
        });
    }


    render() {
        return (
            <Container fluid={true} className={"mt-2"}>
                <Row>
                    <Col xs={{span: 3}}>
                        <SubjectList onClick={(p)=>this.filterItem(p)}/>
                    </Col>
                    <Col xs={{span: 9}}>
                        <SubjectLineChart selectedSubject={this.state.selectedSubject}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Subject