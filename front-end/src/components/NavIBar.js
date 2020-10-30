import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-responsive-modal';
import LoginPage from './LoginPage';




const NaviBar = () => {
    const userId = useSelector(state => state.userId);
    const dispatch = useDispatch();
    const [loginModalOpened, switchLoginModal] = useState(true);


    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Modal open={loginModalOpened} onClose={() => switchLoginModal(false)} center>
                        <LoginPage loginModalOpened={loginModalOpened} />
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar bg="light" variant="light" style={{ textAlign: "right", direction: "rtl" }}>
                        <Navbar.Brand href="#home">מערכת הודעות</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                משתמש: <b >{userId}</b>
                            </Navbar.Text>

                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default NaviBar;