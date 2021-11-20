
import '../styles/Header.css';
const Info = ({ipAddress,location,timezone,isp}) => {

   

    return (
        <div className="location_info">
        <div className="ip_address">
            <p>Ip Address</p>
         <div className="test">
            <h2>{ipAddress}</h2>
            </div>           
        </div>
        <div className="location">
            <p>Location</p>
            <h2>{location}</h2>
        </div>
        <div className="timezone">
          <p>TimeZone</p>
          <h2>{timezone}</h2>
        </div>
        <div className="isp">
            <p>ISP</p>
            <h2>{isp}</h2>
        </div>
</div>

    )
}

export default Info
