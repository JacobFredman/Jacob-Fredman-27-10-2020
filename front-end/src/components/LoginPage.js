import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../utils/staticData';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";


const LoginPage = (props) => {
    const [password, setPassword] = useState();
    const [localUserId, setUserId] = useState();

    const token = useSelector(state => state.token);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name == 'password')
            setPassword(value);
        if (name == 'userId')
            setUserId(value);
    };



    const handleSubmit = async () => {
        axios.post(
            baseUrl + 'sign_in',
            {
                "password": password,
                "userId": localUserId
            },
            { headers: { 'Content-Type': 'application/json' } }
        ).then(Response => { dispatch({ type: 'token', val: Response.data.encodedToken }); dispatch({ type: 'userId', val: Response.data.userId }); }
        );
    };



    return (
        <div>
            <Button onClick={() => alert(props.loginModalOpened)}></Button>
            <h4>זיהוי משתמש</h4>
            <Form dir='rtl' style={{ direction: 'rtl', textAlign: 'right' }} >
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSenderId">
                        <Form.Label>מזהה משתמש:</Form.Label>
                        <Form.Control required name='userId' type="number" placeholder="הקש מספר מזהה" onChange={handleChange} />
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
                        <Button onClick={handleSubmit}>הכנס</Button>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    );
};

export default LoginPage;