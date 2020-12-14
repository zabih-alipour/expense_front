import React from "react";
import './Subject.css'
import {Container, Table} from 'react-bootstrap'

class Subject extends React.Component {
    state = {
        subjects: []
    }

    componentDidMount() {
        fetch('/subjects')
            .then(res => res.json())
            .then(data => {
                this.setState({subjects: data});
            });
    }

    render() {
        return (
            <Container>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>ردیف</th>
                        <th>نام</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.subjects.map((data, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{data.name}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Subject