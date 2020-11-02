import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CreateEmail from './CreateEmail';
import 'react-responsive-modal/styles.css';
import ManageEmails from './ManageEmails';
import { Container } from 'react-bootstrap';


const Messages = () => {

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="create-email" style={{ direction: 'rtl', textAlign: 'right' }} id="emails-tabs">
                        <Tab style={{ textAlign: 'center' }} eventKey="create-email" title="שלח אימייל">
                            <CreateEmail />
                        </Tab>
                        <Tab eventKey="menage-emails" title="ניהול אימיילים">
                            <Container style={{ alignContent: 'right' }}>
                                <Row>
                                    <Col>
                                        <ManageEmails></ManageEmails>
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Messages;