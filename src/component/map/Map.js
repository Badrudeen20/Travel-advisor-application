import React from 'react'
import GoogleMapReact from 'google-map-react';

import './style.scss'
const Map = ({setCoordinates,setBounds,coordinates,setChildClicked,places}) => {

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat:e.center.lat,lng:e.center.lng})
                    setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
                }}
                onChildClick={(child)=>setChildClicked(child)}
            >
            {places?.map((place,i)=>(
                <div className="place" 
                  lat={Number(place.latitude)}
                  lng={Number(place.longitude)}
                  key={i}
                >
                  <div className="location">
                      {place.price}
                  </div>
                </div>
            ))}
            </GoogleMapReact>
        </div>
    )
}

export default Map
