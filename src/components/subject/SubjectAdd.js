import React from "react";
import './SubjectList.css'
import {Button, Col, Container, FormControl, InputGroup, Modal, Row} from 'react-bootstrap'

class SubjectAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matchedSubjects: [],
            show: props.show,
            subject: {
                name: ""
            }
        }
    }

    saveSubject() {

        this.props.onHide()
    }

    onTextChange(txt) {
        if (txt.trim().length > 0) {
            fetch('/subjects/' + txt)
                .then(res => res.json())
                .then(data => {
                    if (data.length > 0) {
                        this.setState({matchedSubjects: data})
                    } else this.setState({matchedSubjects: []})
                })
        } else this.setState({matchedSubjects: []})
    }

    render() {
        const cols = []
        this.state.matchedSubjects.forEach((subject, key) => {
            cols.push(<Col key={key}> {subject.name} </Col>)
        })
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        اضافه کردن آیتم جدید
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup className="mb-3">
                        <FormControl onChange={(e) => this.onTextChange(e.target.value)}
                                     type={"text"}
                                     placeholder="نام آیتم خرید را وارد کنید"
                                     aria-label="نام آیتم"
                                     aria-describedby="basic-addon2"
                        />
                    </InputGroup>
                    <Container>
                        <Row>
                            {cols}
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.onHide()}>بستن</Button>
                    <Button onClick={() => this.saveSubject()}>ذخیره</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SubjectAdd