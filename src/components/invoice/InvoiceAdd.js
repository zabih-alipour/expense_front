import React, {useRef} from "react";
import SubjectAutoSuggest from '../auto_compelet/SubjectAutoSuggest'
import {Button, Form, Modal} from 'react-bootstrap'

function InvoiceAdd(props) {
    const subjectEL = useRef()
    const factorDateEL = useRef()
    const priceEL = useRef()
    const quantityEL = useRef()
    const descriptionEL = useRef()


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
        props.onHide()
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
                        <SubjectAutoSuggest val={subjectEL} subjects={props.subjects} />
                    </Form.Group>
                    <Form.Group controlId="factor_date">
                        <Form.Control type="number" placeholder="تاریخ"
                                      ref={factorDateEL}/>
                    </Form.Group>
                    <Form.Group controlId="quantity">
                        <Form.Control type="float" placeholder="تعداد"
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
                    <Button onClick={() => props.onHide()}>بستن</Button>
                    <Button type={"submit"}>ذخیره</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default InvoiceAdd