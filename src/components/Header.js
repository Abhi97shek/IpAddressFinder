import "../styles/Header.css";
import Map from './Map';
import Info from './Info';
import image from '../assets/images/icon-arrow.svg';
import React,{useState,useRef} from 'react';
import useIpFetcher from "./useIpFetcher";
const Header = () => {

    const [ipAddress,setIpAddress] = useState('');
    const ipAddressRef = useRef(null);  
    const {ipAddresss,isp,timezone,location} = useIpFetcher(ipAddress);
  const IpAddressHandler =(e)=>{
    e.preventDefault();
    setIpAddress(ipAddressRef.current.value);
    
  
  };

 
    return (
      <>
        <header>
          <div className="header_details">
              <h1 className="heading">IP Address Tracker</h1>
              <div className="input_box">
                <input type="text" className="input_ip" placeholder="Search for any IP address or domain" ref={ipAddressRef} />
                <span className="arrow_logo" onClick={IpAddressHandler}><img src={image} alt="Search Icon"/></span>
              
              </div>
          </div>

       </header>
        <Info ipAddress={ipAddresss} isp={isp} timezone={timezone} location={location}/>
        <Map location={location}/>
      </>
    )
}

export default Header;
