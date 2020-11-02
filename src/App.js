import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Messages from './components/Msgs/Messages';
import NaviBar from './components/NavIBar';


function App() {
  return (
    <Container>
      <Row>
        <Col> <NaviBar></NaviBar></Col>
      </Row>
      <Row>
        <Col><Messages /></Col>
      </Row>
    </Container>
  );
}

export default App;
