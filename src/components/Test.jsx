import React from 'react'
import axios from 'axios'


// api call 

const lat = `33.749`;
const lon = `-84.388`;
const API_KEY = `61ad8827b626c5fad8ae7a0ba951db32`;
let daysOnly = `current,minutely,hourly`;
// let call = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon=' + lon + '&exclude=' + daysOnly + '&appid=' + API_KEY;
// let call2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${daysOnly}&appid=${API_KEY}`;
let call = "https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=minutely,hourly&units=imperial&appid=61ad8827b626c5fad8ae7a0ba951db32";


class Test extends React.Component {
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
            this.setState({ conditions: })
        }
        catch {
            console.error("somethings not right brah")
        }
    }

    componentDidMount() {
        console.log(call)
        this.getWeather()
    }

    render() {
        return (
            <div>
                <h2>Current Temperature in Atlanta: {this.state.current}</h2>
                <h3>Today's High: { this.state.high }</h3>
                <h3>Today's Low: { this.state.low }</h3>

            </div>
        )
    }
}

export default Test;