import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Messages from './components/Messages';
import NaviBar from './components/NaviBar';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <NaviBar></NaviBar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Messages />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
