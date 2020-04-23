import React, { useEffect, useState }from 'react'
import moment from 'moment'
import Tooltip from '@material-ui/core/Tooltip';



function Weather() {
    const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=b833c887640142f08a365150202104&q=41.7071104,-73.8820096&days=3`
    const [threeDayForcast, setThreeDayForcast] = useState(null)

    const formatForcast = (forcast) =>{
        return forcast.map(day => {
            const {date, day:{avgtemp_f: temp, condition: {text,icon}}} = day

            return { date, temp: `${temp}`.split('.')[0], text, icon }
        })
    }
    
    useEffect(() => {
            (async ()=>{
                const res = await fetch(baseUrl)
                const weather = await res.json()
                const {forecast: {forecastday}} = weather
                
                setThreeDayForcast( formatForcast(forecastday) )
            })()
    }, [baseUrl])


    return (
        <>
            {
                !threeDayForcast
                ? ""
                : (
                    <ul className="weather-container d-flex">

                        {
                            threeDayForcast.map((day,i) => {
                                return (

                                    <Tooltip key={i} title={`${day.temp} \u00B0 F`}>
                                        <li>
                                            <img src={day.icon} alt="weather icon"/>
                                            <span>{moment(day.date).format('ddd')}</span>
                                        </li>
                                    </Tooltip>

                                )
                            })
                        }
                        
                    </ul>
                )
            }
        </>
    )
}

export default Weather
