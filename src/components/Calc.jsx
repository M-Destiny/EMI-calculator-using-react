import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Emi from './Emi'
import { useRef, useState } from 'react';

export default function Calc() {
    var amount = useRef();
    var roi = useRef();
    var tenure = useRef();
    const [emi, setEmi] = useState(0);
    const [total, setTotal] = useState(0);
    const [duration, setDuration] = useState(0);

    function submit() {
        // console.log('submit')
        console.log(typeof amount.current.value);
        console.log(typeof roi.current.value);
        console.log(typeof tenure.current.value);
        console.log(amount.current.value, roi.current.value, tenure.current.value);
        var emi = (amount.current.value * roi.current.value * tenure.current.value) / 100;
        // var total = emi * tenure.current.value;
        // var duration = tenure.current.value * 12
        var am=amount.current.value;
        var r=roi.current.value;
        var t=tenure.current.value;
        setEmi(am);
        setTotal(r);
        setDuration(t);
        console.log(am, r, t);

    }



    return (
        <div className='container'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Loan Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Loan Amount" ref={amount} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>ROI RATE</Form.Label>
                    <Form.Control type="number" placeholder="Enter ROI " ref={roi} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Duration IN YEARS</Form.Label>
                    <Form.Control type="number" placeholder="Enter Years " ref={tenure} />
                </Form.Group>
                <Button variant="primary"  className='mt-3' onClick={submit}>
                    Submit
                </Button>

            </Form>
            {/* <Emi emi={emi} total={total} duration={duration} /> */}

            <Emi submit={emi} total={total} duration={duration}/>
            {/* {emi} {total} {duration} */}

        </div>
    )
}
