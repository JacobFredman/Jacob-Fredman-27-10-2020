import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const CreateEmail = () => {

    const handleChange = () => {
        alert('change!');
    };

    return (
        <div>
            <Form dir='rtl' style={{ direction: 'rtl', textAlign: 'right' }} >
                <Form.Row>
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridSenderId">
                        <Form.Label>:מזהה שולח</Form.Label>
                        <Form.Control required name='senderId' type="number" placeholder="הקש מספר מזהה" onChange={handleChange} />
                    </Form.Group>
                    <Col></Col>
                </Form.Row>
                <Form.Row>
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridReciverId">
                        <Form.Label>:מזהה נמען</Form.Label>
                        <Form.Control required name='reciverId' type="number" placeholder="הקש מספר מזהה" onChange={handleChange} />
                    </Form.Group>
                    <Col></Col>
                </Form.Row>
                <Form.Row>
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridSubject">
                        <Form.Label>נושא</Form.Label>
                        <Form.Control required name='subject' type="text" placeholder="נושא" onChange={handleChange} />
                    </Form.Group>
                    <Col></Col>
                </Form.Row>
                <Form.Row>
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridSenderId">
                        <Form.Label>תוכן ההודעה</Form.Label>
                        <Form.Control required name='messageBody' type="text" placeholder="הכנס את תוכן ההודעה כאן" onChange={handleChange} />
                    </Form.Group>
                    <Col></Col>
                </Form.Row>
                <Form.Row>
                    <Col></Col>
                    <Form.Group as={Col} controlId="formGridSenderId">
                        <Button>שלח הודעה</Button>
                    </Form.Group>
                    <Col></Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default CreateEmail;