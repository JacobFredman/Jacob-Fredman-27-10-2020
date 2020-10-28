import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CreateEmail from './CreateEmail';
import { useDispatch, useSelector } from "react-redux";
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import LoginPage from './LoginPage';


const Messages = () => {
    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);
    const [loginModalOpened, switchLoginModal] = useState(true);

    const alertToken = () => {
        alert(token);
    }


    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Modal open={loginModalOpened} onClose={() => switchLoginModal(false)} center>
                        <h4>זיהוי משתמש</h4>
                        <LoginPage />
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="create-email" style={{ direction: 'rtl', textAlign: 'right' }} id="emails-tabs">
                        <Tab eventKey="create-email" title="שלח אימייל">

                            <CreateEmail />
                        </Tab>
                        <Tab eventKey="menage-emails" title="ניהול אימיילים">
                            <p>ביי</p>
                            <Button onClick={alertToken}></Button>
                        </Tab>
                    </Tabs>
                </Col>
                {/* <Col>
                    <button onClick={() => dispatch({ type: 'token', val: '111' })}>Add to count</button>
                </Col> */}
            </Row>
        </React.Fragment>
    );
};

export default Messages;