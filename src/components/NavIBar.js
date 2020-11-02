import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useDispatch, useSelector } from "react-redux";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-responsive-modal';
import LoginPage from './LoginPage';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';




const NaviBar = () => {
    const userId = useSelector(state => state.userId);
    const loginModalOpened = useSelector(state => state.loginModalOpened);
    const dispatch = useDispatch();



    const userInfo = () => {
        let userConnection;
        if (userId !== null && userId !== undefined)
            userConnection =
                <React.Fragment>
                    <Navbar.Text style={{ marginLeft: "10px", marginRight: "10px" }}>
                        <h5> משתמש: <Badge variant="secondary">{userId}</Badge></h5>
                    </Navbar.Text>
                    <Button variant="info" size="sm" onClick={() => dispatch({ type: 'loginModalOpened', val: true })}>התחבר כמשתמש אחר</Button>
                </React.Fragment>
        else // user not connected
            userConnection =
                <React.Fragment>
                    <Navbar.Text>משתמש: <b > אורח </b></Navbar.Text>
                    <Button variant="info" size="sm" onClick={() => dispatch({ type: 'loginModalOpened', val: true })}>התחבר</Button>
                </React.Fragment>
        return (
            <React.Fragment>
                { userConnection}
            </React.Fragment>
        );
    }




    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Modal open={loginModalOpened} onClose={() => { }} closeOnEsc={false} showCloseIcon={false} center>
                        <LoginPage />
                    </Modal>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Navbar bg="light" variant="light" style={{ textAlign: "right", direction: "rtl" }}>
                        <Navbar.Brand >הודעות.נט</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mr-auto">
                                {userInfo()}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </React.Fragment >
    );
};

export default NaviBar;