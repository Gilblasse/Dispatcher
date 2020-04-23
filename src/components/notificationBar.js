import React from 'react'
import { Icon } from 'react-materialize';
import Weather from './weather';

function NotificationBar() {

    const handleClick = () => {
        document.documentElement.requestFullscreen()
    }

    return (
        <div className='notification-bar d-flex justify-content-between'>
            <Weather />

            <div className="d-flex justify-content-end">
                <span style={{cursor: "pointer"}} onClick={handleClick}>
                    <Icon>zoom_out_map</Icon>
                </span>
            </div>
        </div>
    )
}

export default NotificationBar


//    ========================
//      FETCHES WEATHER API
//    ========================


// FRIST GET GEOLOCATION = navigator.geolocation.getCurrentPosition(p => console.log(p)) THIS IS A PROMIS REMEBER .THEN

// baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=b833c887640142f08a365150202104&q=41.7071104,-73.8820096&days=3`

// fetch(baseUrl)
// .then(res => res.json())
// .then(weather => {
//   const {forecast: {forecastday}} = weather
  
//   return forecastday.map(day => {
//   const {date, day:{avgtemp_f: temp}} = day
  
//   	return {
//     	date,
//       temp,
//       text: day.day.condition.text,
//       icon: day.day.condition.icon
//     }
    
//   })
  
// })
// .then(obj => console.log(obj))