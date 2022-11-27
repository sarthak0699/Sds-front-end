import { TripsLayer } from 'deck.gl';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from './Home';
import './App2.scss'
import Trajectories from './trajectories.json'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useEffect } from 'react';
import { PathLayer } from 'deck.gl';
import SR from './SR';
// const getSpatialQueryData = (setTrips,spatialUrl) =>{
//   const data = 
// }


// var done = true
function App2() {
  const [ind,setInd] = useState(0)
  const [trips,setTrips] = useState([{path:[],timestamps:[]}])
  var formValues = {lonMin:"",lonMax:"",timeMin:"",timeMax:"",latMin:"",latMax:"",trajectory_id:"",neighbors:""}
  
  const getPathAndTime = (array)=>{
    var data = []
  
    array.forEach(s =>{
      
      var path =[]
      var time =s.timestamp
      s.location.forEach(s =>{
        var temp = [].concat(s).reverse()
        
        path.push(temp)
        
      })
      data.push({"path":path,"timestamps":time})
    })
    return data
  }



 var data = []
//  const [trips,setTrips] = useState()
//  const [trips1,setTrips1] = useState()

 var baseUrl = "http://localhost:9000"


 useEffect(()=>{
  // get trajectories
  console.log("in App2------")

  axios.get(baseUrl+"/trajectories").then(val =>{
    data = val.data
    console.log("data in trajectories - ", data)
    
    setTrips(getPathAndTime(data))})

    // setTripLayer(new PathLayer({
    //   id: 'TripsLayer',
    //   data : trips,
      
    //   /* props from TripsLayer class */
    //   // fadeTrail: true,
    //   /* props inherited from PathLayer class */
      
    //   // billboard: false,
    //   capRounded: true,
    //   getColor: [253, 128, 93],
    //   getPath: d => d.path,
    //   // getWidth: 1,
    //   jointRounded: true,
    //   // miterLimit: 4,
    //   // rounded: true,
    //   // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    //   widthMinPixels: 1,
    //   widthScale: 1,
    //   // widthUnits: 'meters',
      
    //   /* props inherited from Layer class */
      
    //   // autoHighlight: false,
    //   // coordinateOrigin: [0, 0, 0],
    //   // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    //   // highlightColor: [0, 0, 128, 128],
    //   // modelMatrix: null,
    //   opacity: 0.8,
    //   // pickable: false,
    //   // visible: true,
    //   // wrapLongitude: false,
    // }))
  

  //get knn results
  // axios.post(baseUrl+'/knn',{
  //   "trajectory_id": 0,
  //   "neighbors": 5
  // })
  // .then((response)=> {
  //     console.log("knn result-");
  //     console.log(response.data);
  //   })
  //   .catch((error)=> {
  //     console.log("knn error-");
  //     console.log(error);
  //   });

},[])

const tripLayer0 = new PathLayer({
  id: Math.random(10),
  data : trips,
  
  /* props from TripsLayer class */
  // fadeTrail: true,
  /* props inherited from PathLayer class */
  
  // billboard: false,
  capRounded: true,
  getColor: [253, 128, 93],
  getPath: d => d.path,
  // getWidth: 1,
  jointRounded: true,
  // miterLimit: 4,
  // rounded: true,
  // widthMaxPixels: Number.MAX_SAFE_INTEGER,
  widthMinPixels: 1,
  widthScale: 1,
  // widthUnits: 'meters',
  
  /* props inherited from Layer class */
  
  // autoHighlight: false,
  // coordinateOrigin: [0, 0, 0],
  // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
  // highlightColor: [0, 0, 128, 128],
  // modelMatrix: null,
  opacity: 0.8,
  // pickable: false,
  // visible: true,
  // wrapLongitude: false,
})

  var spatialUrl = "http://localhost:9000/get-spatial-range"
  var spatialTempUrl = "http://localhost:9000/get-spatial-range"
  
  //get knn results
  

  var url1 = "localhost"
  var url2 = ""
  var url3 = ""

  

  const material = {
    ambient: 0.1,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [60, 64, 70]
  };



  const onSpatialClick = () =>{
    console.log(formValues)
    axios.post(spatialUrl,data = {...formValues}).then(res =>{
      setTrips(getPathAndTime(res.data))

    }).catch(e =>{
      console.log("error on click->",e)
    })
  }

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
              <Nav.Link className='api' onClick={onSpatialClick}>Spatio-Temporal Query</Nav.Link>
              <Nav.Link className='api' onClick={onSpatialClick}>Spatial Query</Nav.Link>
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
          <Form.Control type ="number" placeholder = "Min Lat" onChange={e => {e.preventDefault();formValues = {...formValues,latMin:e.target.value}} }></Form.Control>
        </Col>
        <Col>
          <Form.Control type ="number" placeholder = "Max Lat" onChange={e => {e.preventDefault();formValues = {...formValues,latMax:e.target.value}} }></Form.Control>
        </Col>
        <Col>
          <Form.Control type ="number" placeholder = "Min lon" onChange={e => {e.preventDefault();formValues = {...formValues,lonMin:e.target.value}} }></Form.Control>
        </Col>
        <Col>
          <Form.Control className='in' type ="number" placeholder = "Max lon" onChange={e => {e.preventDefault();formValues = {...formValues,lonMax:e.target.value}} }></Form.Control>
        </Col>
        <Col>
          <Form.Control type ="number" placeholder = "Min Time" onChange={e => {e.preventDefault();formValues = {...formValues,timeMin:e.target.value}} }></Form.Control>
        </Col>
        <Col>
          <Form.Control type ="number" placeholder = "Max Time" onChange={e => {e.preventDefault();formValues = {...formValues,timeMax:e.target.value}} }></Form.Control>
        </Col>  
        <Col>
          <Form.Control type ="number" placeholder = "Trajectory ID" onChange={e => {formValues = {...formValues,trajectory_id:e.target.value}} } ></Form.Control>
        </Col>
        <Col>
          <Form.Control type ="number" placeholder = "Neighbors" onChange={e => {formValues = {...formValues,neighbors:e.target.value}} } ></Form.Control>
        </Col>
      </Row>
    </Container>
    </div>
    <div>
      {<Home data={trips}/>}
    </div>
    {/* <div>
      <Home layer= {tripLayer}/>
    </div>
    <div>
      <Home layer= {tripLayer}/>
    </div>
    {ind===1 && <div>
      <SR layer= {tripLayer1}/>
    </div>} */}
    </div>
    
    </>
  );
}


export default App2;