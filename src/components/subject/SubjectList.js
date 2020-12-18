import React from "react";
import './SubjectList.css'
import {Container, Form, ListGroup} from 'react-bootstrap'

class SubjectList extends React.Component {
    state = {
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
            console.log(searchSubjects)
            this.setState({searchSubjects: searchSubjects})
        } else this.setState({searchSubjects: this.state.subjects})
    }

    render() {
        return (
            <Container className={"scroll-300"}>
                <ListGroup onSelect={(selectedKey) => this.props.onClick(selectedKey)}>
                    <ListGroup.Item style={{backgroundColor: 'lightsteelblue'}}>
                        <Form.Control type={"text"} placeholder={"برای جستجو تایپ کنید"}
                                      onChange={(e) => this.onSearch(e.target.value)}/>
                    </ListGroup.Item>

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
            </Container>
        )
    }
}

export default SubjectList