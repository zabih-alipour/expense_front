import React from "react";
import './Home.css'
import DailyExpenseChart from '../report/DailyExpenseChart'
import SubjectPieChart from '../report/SubjectPieChart'
import {Container, Row, Col} from 'react-bootstrap'

class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <SubjectPieChart/>
                    </Col>
                    <Col>
                        <DailyExpenseChart/>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Home