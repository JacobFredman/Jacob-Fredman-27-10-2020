import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useSelector } from "react-redux";
import axios from 'axios';
import { baseUrl } from '../../utils/staticData';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';



const CreateEmail = () => {
    const userId = useSelector(state => state.userId);
    const token = useSelector(state => state.token);
    const [reciverId, setReciverId] = useState('');
    const [subject, setSubject] = useState('');
    const [messageBody, setMessageBody] = useState('');
    const [formValidated, setFormValidated] = useState();
    const [sendingMsg, setSendingMsg] = useState();
    const [showWrongUserMsg, setShowWrongUserMsg] = useState(false);
    const [showOkMsgSending, setShowOkMsgSending] = useState(false);


    const handleSubmit = async () => {
        setSendingMsg(true);
        axios.post(
            baseUrl + 'write_message',
            {
                reciverId,
                subject,
                messageBody
            },
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
        ).then(Response => { setSendingMsg(false); clearForm(); setShowOkMsgSending(true); }
        ).catch(error => {
            setSendingMsg(false);
            setShowWrongUserMsg(true);
        })
    };


    useEffect(() => {
        setFormValidated(checkVaidation());
    }, [reciverId, subject, messageBody])

    const clearForm = () => {
        setReciverId(''); setSubject(''); setMessageBody('');
    };

    const checkVaidation = () => {
        return reciverId && subject && messageBody;
    }


    return (
        <div className="col d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Form dir='rtl' style={{ direction: 'rtl', textAlign: 'right' }} >
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSenderId">
                                <Form.Label>מזהה שולח:</Form.Label>
                                <Form.Control disabled name='senderId' type="text" value={userId} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridReciverId">
                                <Form.Label>מזהה נמען:</Form.Label>
                                <Form.Control required name='reciverId' value={reciverId} type="text" placeholder="הקש את שם הנמען" onChange={e => setReciverId(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSubject">
                                <Form.Label>נושא:</Form.Label>
                                <Form.Control required name='subject' value={subject} type="text" placeholder="נושא" onChange={e => setSubject(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSenderId">
                                <Form.Label>תוכן ההודעה:
                                    </Form.Label>
                                <Form.Control required name='messageBody' value={messageBody} type="text" placeholder="תוכן ההודעה כאן" as="textarea" rows={3} onChange={e => setMessageBody(e.target.value)} />
                            </Form.Group>
                        </Form.Row>
                        {
                            showWrongUserMsg
                                ?
                                (<Form.Row>
                                    <Form.Group as={Col} controlId="formGridWrongMsg">
                                        <Alert variant="danger" onClose={() => setShowWrongUserMsg(false)} dismissible>
                                            <p>שם משתמש או סיסמה שגוי!</p>
                                        </Alert>
                                    </Form.Group>
                                </Form.Row>)
                                :
                                ''
                        }
                        {
                            showOkMsgSending
                                ?
                                (<Form.Row>
                                    <Form.Group as={Col} controlId="formGridSuccessMsg">
                                        <Alert variant="success" onClose={() => setShowOkMsgSending(false)} dismissible>
                                            <p>נשלח בהצלחה!</p>
                                        </Alert>
                                    </Form.Group>
                                </Form.Row>)
                                :
                                ''
                        }
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridSenderId">
                                <Button disabled={!formValidated || sendingMsg} onClick={handleSubmit}>
                                    {
                                        sendingMsg
                                            ?
                                            "שולח..."
                                            :
                                            "שלח הודעה"
                                    }
                                </Button>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Card.Body>
            </Card >
        </div>
    );
};

export default CreateEmail;