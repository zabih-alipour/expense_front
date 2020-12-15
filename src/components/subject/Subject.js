import React from "react";
import './Subject.css'
import {Container, ListGroup} from 'react-bootstrap'

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
                <ListGroup onSelect={(selectedKey)=> this.props.onClick(selectedKey)}>
                    {
                        this.state.subjects.map((data, key) => {
                            return (
                                <ListGroup.Item action eventKey={data.id}>
                                    {data.name}
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </Container>
        )
    }
}

export default Subject