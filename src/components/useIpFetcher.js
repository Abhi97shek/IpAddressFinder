import React, { useState,useEffect } from 'react'

const useIpFetcher = (entIpAddress) => {    

  const [info,setInfo] = useState({
      ipAddresss:'',
      location:' ',
      timezone: ' ',
      isp: ''
  });

  const IpAddressHandler = (e)=>{
 
  };

  useEffect(()=>{ 
          const fetchAPI = async ()=>{
            const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=at_v3Duu8Gj4sFNM9QbTD4hdDqohHkNv&ipAddress=${entIpAddress}`);
            const data = await response.json();
         
            setInfo({
                ipAddresss:data.ip,
                location: `${data.location.region}, ${data.location.country}`,
                timezone: `${data.location.country} ${data.location.timezone}`,
                isp:data.isp
            });
          };
          
     fetchAPI();

  },[entIpAddress]);

    return info;
}

export default useIpFetcher
