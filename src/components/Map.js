import React, { useEffect,useState } from 'react';
import { MapContainer, TileLayer, Marker,Popup} from 'react-leaflet';
import '../styles/Header.css';
const Map = ({location}) => {

    const [lat,setLat] =useState('');
    const [long,setLong] = useState('');

    useEffect(()=>{


      const fetchGeoAPI  = async ()=>{

          const response = await fetch(`https://open.mapquestapi.com/geocoding/v1/address?key=13F72J9e8hanAzeqSTCvTfatASFbjShg&location=${location}`);
          const data = await response.json();
          
          
      };
   
      fetchGeoAPI();
    },[location]);

    return (
      <div id="map">
      <MapContainer center={[32.2251866,75.6604847]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[32.2251866,75.6604847]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
    )
     
}

export default Map;
