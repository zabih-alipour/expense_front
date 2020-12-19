import React from "react";
import './InvoiceList.css'
import Table from 'react-bootstrap/Table'
import {Col, Container, Form, Row} from "react-bootstrap";

class InvoiceList extends React.Component {
    state = {
        invoices: [],
        searchedInvoices: []
    }

    componentDidMount() {
        fetch('/invoices/' + this.props.filterItems)
            .then(res => res.json())
            .then(data => {
                this.setState({invoices: data, searchedInvoices: data});
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let {filterItems} = this.props;
        if (prevProps.filterItems !== filterItems) {
            fetch('/invoices/' + filterItems)
                .then(res => res.json())
                .then(data => {
                    this.setState({invoices: data, searchedInvoices: data});
                });
        }
    }

    filterByDate(date) {
        if (date !== undefined && date !== null && date.trim().length > 0) {
            let searchedInvoices = this.state.invoices.filter(p => p.factor_date.slice(0, date.length) === date);
            this.setState({searchedInvoices: searchedInvoices})
        } else this.setState({searchedInvoices: this.state.invoices})
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Form.Control type={"text"} placeholder={"برای جستجو در تاریخ تایپ کنید"}
                            onChange={(e)=> this.filterByDate(e.target.value)}
                        />
                    </Col>
                    <Col/>
                    <Col style={{}}> تعداد: {this.state.searchedInvoices.length}</Col>
                </Row>
                <Row style={{}}>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                {/*<th>ردیف</th>*/}
                                <th>تاریخ</th>
                                <th>آیتم</th>
                                <th>تعداد</th>
                                <th>قیمت</th>
                                <th>توضیحات</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.searchedInvoices.map((data, key) => {
                                    return (
                                        <tr key={key}>
                                            {/*<td>{key + 1}</td>*/}
                                            <td>{data.factor_date}</td>
                                            <td>{data.item_name}</td>
                                            <td>{data.quality}</td>
                                            <td>{data.price}</td>
                                            <td>{data.description}</td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default InvoiceList