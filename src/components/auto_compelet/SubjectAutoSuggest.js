import React from 'react';
import './SubjectAutoSuggest.css'
import {Container, Form, Row} from "react-bootstrap";

export default class SubjectAutoSuggest extends React.Component {
    constructor(props) {
        super(props);
        this.subjects = props.subjects
        this.state = {
            value: '',
            suggestions: [],
            isSearching: false

        };
    }

    getSuggestionValue = suggestion => {
        this.setState({
            value: suggestion.target.innerText,
            suggestions: [],
            isSearching: false

        })
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        const subjects = this.subjects
        console.log(subjects)
        if (subjects !== undefined) {
            return inputLength === 0 || subjects.length === 0
                ? []
                : subjects.filter(sub => sub.name.toLowerCase().slice(0, inputLength) === inputValue);
        }else return []
    }

    onChange = (event) => {
        this.setState({
            value: event.target.value,
            isSearching: true
        });
    };

    render() {
        const {value, isSearching} = this.state;

        const inputProps = {
            placeholder: 'لطفا تایپ کنید',
            value,
            onChange: this.onChange
        };
        const items = []
        if (isSearching) {
            this.getSuggestions(value).forEach((subject, key) => {
                items.push(
                    <Row key={key} className={"popup-suggestion-row"}
                         onClick={(e) => this.getSuggestionValue(e)}>
                        {subject.name}
                    </Row>)
            })
        }

        return (
            <div>
                <Form.Control {...inputProps} ref={this.props.val}/>
                <Container className={"popup-suggestion"}>
                    {items}
                </Container>
            </div>

        )
    }
}