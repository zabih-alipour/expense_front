import React from "react";
import './InvoiceList.css'
import Table from 'react-bootstrap/Table'

class InvoiceList extends React.Component {
    state = {
        invoices: []
    }

    componentDidMount() {
        fetch('/invoices/' + this.props.filterItems)
            .then(res => res.json())
            .then(data => {
                this.setState({invoices: data});
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filterItems !== this.props.filterItems) {
            fetch('/invoices/' + this.props.filterItems)
                .then(res => res.json())
                .then(data => {
                    this.setState({invoices: data});
                });
        }
    }

    render() {
        return (
            <div className={'invoice-div'}>
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
                        this.state.invoices.map((data, key) => {
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
            </div>
        )
    }
}

export default InvoiceList