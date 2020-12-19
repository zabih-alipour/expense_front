import React from "react";
import './SubjectList.css'
import {Button, Col, Container, Form, ListGroup, Row} from 'react-bootstrap'
import SubjectAdd from "./SubjectAdd";

class SubjectList extends React.Component {
    state = {
        show: false,
        subjects: [],
        searchSubjects: []
    }

    componentDidMount() {
        fetch('/subjects')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    subjects: data,
                    searchSubjects: data,
                });
            });
    }

    onSearch(val) {
        if (val !== undefined && val !== null && val.trim().length > 0) {
            let searchSubjects = this.state.subjects.filter(p => p.name.slice(0, val.length) === val);
            this.setState({searchSubjects: searchSubjects})
        } else this.setState({searchSubjects: this.state.subjects})
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
            <Container>
                <SubjectAdd show={show}
                            onHide={() => this.closeModal()}
                />
                <ListGroup onSelect={(selectedKey) => this.props.onClick(selectedKey)}>
                    <ListGroup.Item style={{backgroundColor: 'lightsteelblue'}}>
                        <Form.Control type={"text"} placeholder={"برای جستجو تایپ کنید"}
                                      onChange={(e) => this.onSearch(e.target.value)}/>
                    </ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor: 'lightsteelblue'}}>
                        <Button variant={"info"} className={"subject-add-button"}
                                onClick={() => this.showModal()}>ثبت جدید</Button>
                    </ListGroup.Item>
                </ListGroup>
                <div style={{overflow:"scroll", maxHeight:"700px"}}>
                    <ListGroup onSelect={(selectedKey) => this.props.onClick(selectedKey)}>
                        {
                            this.state.searchSubjects.map((data, key) => {
                                return (
                                    <ListGroup.Item className={"subject-list-item"} key={key} action eventKey={data.id}>
                                        {data.name}
                                    </ListGroup.Item>
                                )
                            })
                        }
                    </ListGroup>
                </div>
            </Container>
        )
    }
}

export default SubjectList