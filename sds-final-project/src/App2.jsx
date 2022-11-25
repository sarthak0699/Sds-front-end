import { TripsLayer } from 'deck.gl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import App3 from './App3';
import './App2.scss'
import Trajectories from './trajectories.json'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
const getPathAndTime = (array)=>{
  var data = []

  array.forEach(s =>{
    console.log(s)
    var path =[]
    var time =s.timestamps
    
    s.locations.forEach(s =>{
      var temp = [].concat(s).reverse()
      
      path.push(temp)
      
    })
    data.push({"path":path,"timestamps":time})
  })
  return data
}


function App2() {

  use

  const [data,setData] = useState(getPathAndTime(Trajectories) )
  var trajectoriesUrl = "http://localhost:9000/trajectories"
  var url1 = "localhost"
  var url2 = ""
  var url3 = ""

  const material = {
    ambient: 0.1,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [60, 64, 70]
  };

   return (
    <>
    <div className='app2'>
    <div>
      <Navbar bg="dark" expand="lg" className='navBar'>
        <Container>
          <Navbar.Brand  className='subject'>Spatial Data Science</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='api'>Home</Nav.Link>
              <Nav.Link className='api'>Spatio-Temporal Query</Nav.Link>
              <Nav.Link className='api'>Spatial Query</Nav.Link>
              <Nav.Link className='api'>Knn</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    <div>
    <Container className='inputs'>
      <Row>
        <Col>
          <Form.Control type ="number" placeholder = "Min Lat"></Form.Control>
        </Col>
        <Col>
          <Form.Control type ="number" placeholder = "Max Lat"></Form.Control>
        </Col><Col>
          <Form.Control type ="number" placeholder = "Min Long"></Form.Control>
        </Col><Col>
          <Form.Control className='in' type ="number" placeholder = "Max Long"></Form.Control>
        </Col><Col>
          <Form.Control type ="number" placeholder = "Min Lat"></Form.Control>
        </Col>  
      </Row>
    </Container>
    </div>
    <div>
      <App3 data={data}/>
    </div>
    </div>
    
    </>
  );
}

export default App2;