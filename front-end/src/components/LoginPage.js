import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../utils/staticData';
import axios from 'axios';
import { useDispatch } from "react-redux";


const LoginPage = () => {
    const [password, setPassword] = useState();
    const [localUserId, setUserId] = useState();
    const [showWrongUserMsg, setShowWrongUserMsg] = useState(false);
    const [loading, setLoadingState] = useState(false);

    const dispatch = useDispatch();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'password')
            setPassword(value);
        if (name === 'userId')
            setUserId(value);
    };


    const getMessages = async (Newtoken) => {
        axios.post(baseUrl + 'get_all_messages',
            {},
            { headers: { 'Content-Type': 'application/json', 'Authorization': Newtoken } }
        ).then(response => { dispatch({ type: 'msgsList', val: response.data.messages }); }
        );
    };


    const handleSubmit = async () => {
        setLoadingState(true)
        axios.post(
            baseUrl + 'sign_in',
            {
                "password": password,
                "userId": localUserId
            },
            { headers: { 'Content-Type': 'application/json' } }
        ).then(Response => {
            dispatch({ type: 'token', val: Response.data.encodedToken });
            dispatch({ type: 'userId', val: Response.data.userId });
            dispatch({ type: 'loginModalOpened', val: false });
            getMessages(Response.data.encodedToken);
        }
        ).catch(error => {
            setLoadingState(false);
            setShowWrongUserMsg(true);
        })
    };



    return (
        <div>
            <Form dir='rtl' style={{ direction: 'rtl', textAlign: 'right' }} >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridHeader">
                        <h4>זיהוי משתמש</h4>
                    </Form.Group>
                </Form.Row>
                {
                    showWrongUserMsg
                        ?
                        (<Form.Row>
                            <Form.Group as={Col} controlId="formGridAlert">
                                <Alert variant="danger" onClose={() => setShowWrongUserMsg(false)} dismissible>
                                    <Alert.Heading>שם משתמש או סיסמה שגוי!</Alert.Heading>
                                    <p>נא נסה שנית</p>
                                </Alert>
                            </Form.Group>
                        </Form.Row>)
                        :
                        ''
                }
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSenderId">
                        <Form.Label>שם משתמש:</Form.Label>
                        <Form.Control required name='userId' type="text" placeholder="שם המשתמש שלך" onChange={handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>סיסמה:</Form.Label>
                        <Form.Control required name='password' type="password" placeholder="הקש סיסמה" onChange={handleChange} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Button disabled={loading} onClick={handleSubmit}>{loading ? "טוען..." : "הכנס"}</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

export default LoginPage;