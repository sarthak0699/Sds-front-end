// import logo from './logo.svg';
// import './App.css';

// import React from 'react';
// import DeckGL from '@deck.gl/react';
// import {LineLayer} from '@deck.gl/layers';
// import App3 from './App3';

// // DeckGL react component

// function App() {
//   return (
//     <div className="App">
//       <App3/>
//     </div>
//   );
// }

import React from 'react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import App2 from './App2';
import 'bootstrap/dist/css/bootstrap.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.scss'
// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

// DeckGL react component
function App() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];

  return <App2/>;
}

export default App;
