import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Messages = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Tabs defaultActiveKey="create-email" id="emails-tabs">
                        <Tab eventKey="create-email" title="צור אימייל">
                            <p>היי</p>
                        </Tab>
                        <Tab eventKey="menage-emails" title="ניהול אימיילים">
                            <p>ביי</p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </div>
    );
};

export default Messages;