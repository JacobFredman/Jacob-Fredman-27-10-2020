import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { baseUrl } from '../utils/staticData';
import { useDispatch, useSelector } from "react-redux";


const ManageEmails = () => {
    const token = useSelector(state => state.token);
    const [msgsList, setMsgsList] = useState();

    const getMasseges = async () => {
        axios.post(baseUrl + 'get_all_messages',
            {},
            { headers: { 'Content-Type': 'application/json', 'Authorization': token } }
        ).then(response => { console.log(response.data); setMsgsList(response.data.messages); }
        );
    };

    // useEffect(() => {
    //     renderedMsgs();
    //     alert('aaa')
    // })

    const renderedMsgs = () => {
        console.log(msgsList);
        if (msgsList === undefined)
            return;
        const aaa = msgsList.map((msg, i) =>
            <Col>
                {/* <Card style={{ width: '18rem', textAlign: "right", direction: "rtl" }}> */}
                <Card style={{ textAlign: "right", direction: "rtl" }}>
                    <Card.Body>
                        <Card.Title> {msg.subject}</Card.Title>
                        <Card.Text>
                            {msg.message}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{msg.sender}</ListGroupItem>
                        <ListGroupItem>{msg.creation_date}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button id={msg.id} variant="warning">מחק הודעה</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
        console.log(aaa);
        return aaa;
    }


    return (
        <React.Fragment>
            <Button onClick={getMasseges}></Button>
            {alert('bbb')}
            <Row>
                {renderedMsgs()}
            </Row>
        </React.Fragment>
    );
};

export default ManageEmails;