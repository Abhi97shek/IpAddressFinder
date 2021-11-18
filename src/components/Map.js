import React from 'react';
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet';
import '../styles/Header.css';
const Map = ({location}) => {
    return (
      <div id="map">
      <MapContainer center={[32.2654989, 75.6557092]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[32.2654989, 75.6557092]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    )
     
}

export default Map;
