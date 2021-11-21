import React, { useEffect,useState } from 'react';
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet';

import '../styles/Header.css';
import {iconPerson} from './Icons';
const Map = ({location}) => {

    const [lat,setLat] =useState('');
    const [long,setLong] = useState('');
      useEffect(()=>{

          if('geolocation' in navigator)
          {
            navigator.geolocation.getCurrentPosition(position=>{
              const lat = position.coords.latitude;
              const long =position.coords.longitude;

              setLat(lat);
              setLong(long);
            });
          }
      },[]);

    return (
      <div id="map">
      <MapContainer center={[lat,long]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat,long]} icon={iconPerson}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    )
     
}

export default Map;
