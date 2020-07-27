import React from 'react'
import axios from 'axios'

// api call 

// const lat = `33.749`;
// const lon = `-84.388`;
const API_KEY = `61ad8827b626c5fad8ae7a0ba951db32`;
// let daysOnly = `current,minutely,hourly`;
let call = `https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=minutely,hourly&units=imperial&appid=${API_KEY}`;


class Today extends React.Component {
    constructor() {
        super() 

        this.state = {
            info: [],
            current: [],
            high: [],
            low: [],
            icon: [],
            day: [],
            description: [],
            icon: [],
            iconImg: [],
            dateRaw: [],

        }
    }
    
    async getWeather() {
        try {
            const result = await axios.get(call)
            this.setState({ info: result.data })
            this.setState({ high: result.data.daily[0].temp.max })
            this.setState({ low: result.data.daily[0].temp.min })
            this.setState({ current: result.data.current.temp })
            console.log(this.state.low)
            this.setState({ icon: result.data.current.weather[0].icon })
            this.setState({ iconImg: `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`})
            this.setState({ description: result.data.current.weather[0].description })
            this.setState({ dateRaw: result.data.daily[0].dt})

        }
        catch {
            console.error("somethings not right brah")
        }
    }

    componentDidMount() {
        this.getWeather()
        console.log('today')
    }

    convertDate(someprop) {
        let timestamp = someprop;
        let milliseconds = timestamp * 1000
        let dateObj = new Date(milliseconds)
        let readableDate = dateObj.toLocaleString("en-US", {weekday: 'long'})
        return readableDate;
    }

    render() {
        return (
            <div>
                <h2>{this.convertDate( this.state.dateRaw )}</h2>
                <h3>High: { this.state.high }</h3>
                <h3>Low: { this.state.low }</h3>
                <img src={this.state.iconImg} />
            </div>
        )
    }
}

export default Today;