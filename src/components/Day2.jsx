import React from 'react'
import axios from 'axios'

let call = "https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=minutely,hourly&units=imperial&appid=61ad8827b626c5fad8ae7a0ba951db32";
let day = 1;


class Day2 extends React.Component {
    constructor() {
        super() 

        this.state = {
            high: [],
            low: [],
            icon: [],
            iconImg: [],
        }
    }
    
    async getWeather() {
        try {
            const result = await axios.get(call)
            this.setState({ high: result.data.daily[day].temp.max })
            this.setState({ low: result.data.daily[day].temp.min })
            this.setState({ icon: result.data.daily[day].weather[0].icon})
            this.setState({ iconImg: `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`})
        }
        catch {
            console.error("somethings not right brah")
        }
    }

    componentDidMount() {
        this.getWeather()
        console.log(day)

    }

    render() {
        return (
            <div>
                <h3>Tomorrow's High: { this.state.high }</h3>
                <h3>Tomorrow's Low: { this.state.low }</h3>
                <img src={this.state.iconImg} />
            </div>
        )
    }
}

export default Day2;