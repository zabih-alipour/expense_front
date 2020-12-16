import React from "react";
import '../invoice/Invoice.css'
import './SubjectList'
import '../invoice/InvoiceList'
import SubjectList from "./SubjectList";
import SubjectLineChart from "../report/SubjectLineChart";
import SubjectAdd from "./SubjectAdd";
import {Container, Row, Col, Button} from 'react-bootstrap'

class Subject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedSubject: 1
        }
    }

    filterItem(selectedItem) {
        this.setState({
            selectedSubject: selectedItem
        });
    }

    showModal() {
        this.setState({show: true})
    }

    closeModal() {
        this.setState({show: false})
    }


    render() {
        const {show} = this.state
        return (
            <Container fluid={true} className={"mt-2"}>
                <SubjectAdd show={show}
                            onHide={() => this.closeModal()}
                />
                <Row>
                    <Col xs={{span: 11}}/>
                    <Col xs={{span: 1}}>
                        <Button onClick={() => this.showModal()}>ثبت جدید</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 3}}>
                        <SubjectList onClick={(p) => this.filterItem(p)}/>
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