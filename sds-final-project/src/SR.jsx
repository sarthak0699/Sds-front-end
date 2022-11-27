import React from 'react';
import {render} from 'react-dom';
import  {GeoJsonLayer, ArcLayer, MapView} from 'deck.gl';
import DeckGL,{ TripsLayer } from 'deck.gl';

import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import { Map,useControl} from 'react-map-gl'
import Trajectories from './trajectories.json'
import { useState } from 'react';
import { useEffect } from 'react';
// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const COUNTRIES =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson'; //eslint-disable-line
const AIR_PORTS =
  'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';

const INITIAL_VIEW_STATE = {
  latitude: 33.414291502635706,
  longitude: -111.9251839681009,
  zoom: 15,
  bearing: 0,
  pitch: 30
};




function SR(props) {

const [trips,setTrips] = useState()


  const {layer} = props
  console.log("---SR-------------")
  console.log(layer)
var time = 0
var temp2 = []
const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0
});

const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [-74.05, 40.7, 8000]
});
const material = {
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [60, 64, 70]
};

//debug ------------------------------

//var temp2 = [{"path":path,"timestamps":time}]
// const lightingEffect = new LightingEffect({ambientLight, pointLight});
// const layer2 = new TripsLayer({
//   id: 'TripsLayer',
//   data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.trips.json',
  
//   /* props from TripsLayer class */
  
//   currentTime: 500,
//   // fadeTrail: true,
//   getTimestamps: d => d.waypoints.map(p => p.timestamp - 1554772579000),
//   trailLength: 600,
  
//   /* props inherited from PathLayer class */
  
//   // billboard: false,
//   capRounded: true,
//   getColor: [253, 128, 93],
//   getPath: d => d.waypoints.map(p => p.coordinates),
//   // getWidth: 1,
//   jointRounded: true,
//   // miterLimit: 4,
//   // rounded: true,
//   // widthMaxPixels: Number.MAX_SAFE_INTEGER,
//   widthMinPixels: 8,
//   // widthScale: 1,
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
// });




// var layer = new TripsLayer({
//   id: 'TripsLayer',
//   data : data,
  
//   /* props from TripsLayer class */
  
//   currentTime: 0,
//   // fadeTrail: true,
//   getTimestamps: d => d.timestamps - minTimestamp,
//   trailLength:180,
//   fadeTrail : true,
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
// });
const [b,setB] = useState(true)


// var layers =[]
const token = 'pk.eyJ1Ijoic2FydGhhazA2OTkiLCJhIjoiY2xhdXIzYzFvMDh4YTNvcHIxbXpldTE5ZyJ9.RdQqfdel4dmh1ghpo30yCw'

  return (
      <div>
        <DeckGL
          controller
          initialViewState = {INITIAL_VIEW_STATE}
          layers = {[layer]}
        >
          <Map  mapStyle={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'} mapboxAccessToken={token}>
          </Map>
          
        </DeckGL>
      </div>
    )
}

export default SR;
