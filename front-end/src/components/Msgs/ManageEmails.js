import React, { useEffect, useState } from 'react';
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
    const [deleting, setDeleting] = useState();


    useEffect(() => {
        // getMessages();
        // renderedMsgs();
        alert('getMessages');
    });


    useEffect(() => {
        // getMessages();
        // renderedMsgs();
        alert('aaa');
    }, [ListGroupItem]);


    const getMessages = async () => {
        axios.post(baseUrl + 'get_all_messages',
            {},
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
        ).then(response => { console.log(response.data); dispatch({ type: 'msgsList', val: response.data.messages }); }
        );
    };

    const deleteMsg = async (msgId) => {
        setDeleting(true);
        axios.post(baseUrl + 'delete_message',
            { msgId },
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
            // ).then(response => { console.log(response.data); getMessages(); }
        ).then(response => { console.log(response.data); setDeleting(false); getMessages(); }
        ).catch(error => {
            setDeleting(false);
        });
    }

    const renderedMsgs = () => {
        console.log(msgsList);
        if (msgsList === undefined)
            return;
        const renderedCards = msgsList.map((msg, i) =>
            <Col style={{ direction: 'rtl' }}>
                <Card style={{ width: '18rem', textAlign: "right", direction: "rtl" }}>
                    <Card.Body>
                        <Card.Title>{msg.subject}</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><b>שולח: </b>{msg.sender}</ListGroupItem>
                        <ListGroupItem><b>תאריך שליחה: </b>{msg.creation_date}</ListGroupItem>
                        <ListGroupItem>
                            <Form.Control required name='messageBody' value={msg.message} type="text" placeholder="תוכן ההודעה כאן" as="textarea" rows={3} />
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button disabled={deleting} id={msg.id} onClick={() => deleteMsg(msg.id)} variant="warning">
                            {deleting ? "מוחק..." : "מחק הודעה"}
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
        return renderedCards;
    }


    return (
        < React.Fragment >
            {/* <Button onClick={getMessages}></Button> */}
            <Row>
                <Col style={{ direction: 'rtl', textAlign: 'center' }}>
                    {
                        !Array.isArray(msgsList) || !msgsList.length
                            ?
                            <h3>אין הודעות להצגה</h3>
                            :
                            null
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