import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { baseUrl } from '../utils/staticData';
import Card from 'react-bootstrap/Card';




const CreateEmail = () => {
    const userId = useSelector(state => state.userId);
    const token = useSelector(state => state.token);
    const [reciverId, setReciverId] = useState();
    const [subject, setSubject] = useState();
    const [messageBody, setMessageBody] = useState();

    const handleSubmit = async () => {
        axios.post(
            baseUrl + 'write_message',
            {
                reciverId,
                subject,
                messageBody
            },
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
        ).then(Response => { alert(Response.data) }
        );
    };


    return (
        <div class="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form dir='rtl' style={{ direction: 'rtl', textAlign: 'right' }} >
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSenderId">
                                <Form.Label>:מזהה שולח</Form.Label>
                                <Form.Control disabled name='senderId' type="number" placeholder="הקש מספר מזהה" value={userId} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridReciverId">
                                <Form.Label>:מזהה נמען</Form.Label>
                                <Form.Control required name='reciverId' type="number" placeholder="הקש מספר מזהה" onChange={e => setReciverId(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSubject">
                                <Form.Label>נושא</Form.Label>
                                <Form.Control required name='subject' type="text" placeholder="נושא" onChange={e => setSubject(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSenderId">
                                <Form.Label>תוכן ההודעה</Form.Label>
                                <Form.Control required name='messageBody' type="text" placeholder="הכנס את תוכן ההודעה כאן" onChange={e => setMessageBody(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSenderId">
                                <Button onClick={handleSubmit}>שלח הודעה</Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card >
        </div>
    );
};

export default CreateEmail;