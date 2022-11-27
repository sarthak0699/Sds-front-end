import React from 'react'

function SpatialRange(props) {
    const {layer} = props

    return(<DeckGL
          controller = {true}
          initialViewState = {INITIAL_VIEW_STATE}
          layers = {[layer]}
        >
          <Map reuseMaps mapStyle={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'} mapboxAccessToken={token}>
          </Map>

          {console.log(b)}
          
        </DeckGL>)
}

export default SpatialRange