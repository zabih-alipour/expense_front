import React from "react";
import {Button, Form, Modal} from 'react-bootstrap'

function InvoiceAdd(props) {
    const subjectEL = React.useRef(null)
    const factorDateEL = React.useRef(null)
    const priceEL = React.useRef(null)
    const quantityEL = React.useRef(null)
    const descriptionEL = React.useRef(null)

    function saveInvoice(event) {
        event.preventDefault()
        const invoice = {
            factor_date: factorDateEL.current.value,
            item: {
                id: null,
                name: subjectEL.current.value
            },
            price: priceEL.current.value,
            quantity: quantityEL.current.value,
            description: descriptionEL.current.value
        }

        fetch('/invoices', {
            method: 'post',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(invoice)
        })
            .then(res => res.json())
            .then(data => {

            })
    }


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form className="mb-3" onSubmit={(event) => saveInvoice(event)}>
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        اضافه کردن فاکتور جدید
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="item">
                        <Form.Control type="text" placeholder="آیتم خریداری شده"
                                      ref={subjectEL}/>
                    </Form.Group>
                    <Form.Group controlId="factor_date">
                        <Form.Control type="number" placeholder="تاریخ"
                                      ref={factorDateEL}/>
                    </Form.Group>
                    <Form.Group controlId="quantity">
                        <Form.Control type="number" placeholder="تعداد"
                                      ref={quantityEL}/>
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Control type="number" placeholder="قیمت"
                                      ref={priceEL}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Control as="textarea" rows={3} placeholder="توضیحات"
                                      ref={descriptionEL}/>
                    </Form.Group>


                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.props.onHide()}>بستن</Button>
                    <Button type={"submit"}>ذخیره</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )


}

export default InvoiceAdd