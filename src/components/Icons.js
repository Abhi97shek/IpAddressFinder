import mark from '../assets/images/icon-location.svg';
import L from 'leaflet';

const iconPerson = new L.Icon({
    iconUrl: mark,
    iconRetinaUrl: mark,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(45,50),
    className: 'leaflet-div-icon'
});

export { iconPerson };