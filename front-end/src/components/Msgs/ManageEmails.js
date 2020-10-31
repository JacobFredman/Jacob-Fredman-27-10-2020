import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { baseUrl } from '../../utils/staticData';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';


const ManageEmails = () => {
    const token = useSelector(state => state.token);
    const msgsList = useSelector(state => state.msgsList);
    const dispatch = useDispatch();
    const [deletingMsgId, setDeletingMsgId] = useState();


    const getMessages = async () => {
        axios.post(baseUrl + 'get_all_messages',
            {},
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
        ).then(response => { dispatch({ type: 'msgsList', val: response.data.messages }); setDeletingMsgId(null); }
        );
    };

    const deleteMsg = async (msgId) => {
        setDeletingMsgId(msgId);
        axios.post(baseUrl + 'delete_message',
            { msgId },
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
        ).then(response => { getMessages(); }
        ).catch(error => {
            setDeletingMsgId(null);
        });
    }

    const renderedMsgs = () => {
        if (msgsList === undefined)
            return;
        const renderedCards = msgsList.map((msg, i) =>
            <Col key={i} style={{ direction: 'rtl' }}>
                <Card style={{ width: '18rem', textAlign: "right", direction: "rtl" }}>
                    <Card.Body>
                        <Card.Title>{msg.subject}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>שולח: </b>{msg.sender}</ListGroupItem>
                        <ListGroupItem><b>תאריך שליחה: </b>{msg.creation_date}</ListGroupItem>
                        <ListGroupItem>
                            <Form.Control required name='messageBody' defaultValue={msg.message} type="text" placeholder="תוכן ההודעה כאן" as="textarea" rows={3} />
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button disabled={deletingMsgId === msg.id} id={msg.id} onClick={() => deleteMsg(msg.id)} variant="warning">
                            {deletingMsgId === msg.id ? "מוחק..." : "מחק הודעה"}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
        return renderedCards;
    }


    return (
        < React.Fragment >
            <Row>
                <Col style={{ direction: 'rtl', textAlign: 'center' }}>
                    {
                        !Array.isArray(msgsList) || !msgsList.length
                            ?
                            <h3>אין הודעות להצגה</h3>
                            :
                            ''
                    }
                </Col>
            </Row>
            <Row>
                {renderedMsgs()}
            </Row>
        </React.Fragment >
    );
};

export default ManageEmails;