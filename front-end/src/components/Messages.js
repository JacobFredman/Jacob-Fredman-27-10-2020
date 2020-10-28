import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CreateEmail from './CreateEmail';
import { useDispatch, useSelector } from "react-redux";

const Messages = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();

    const alertToken = () => {
        alert(token);
    }

    return (
        <div>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="create-email" style={{ direction: 'rtl', textAlign: 'right' }} id="emails-tabs">
                        <Tab eventKey="create-email" title="שלח אימייל">

                            <CreateEmail />
                        </Tab>
                        <Tab eventKey="menage-emails" title="ניהול אימיילים">
                            <p>ביי</p>
                        </Tab>
                    </Tabs>
                </Col>
                <Col>
                    <button onClick={() => dispatch({ type: 'token', val: '111' })}>Add to count</button>
                    <Button onClick={alertToken}></Button>
                </Col>
            </Row>
        </div>
    );
};

export default Messages;