import React from 'react'
import axios from 'axios'

let call = "https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=minutely,hourly&units=imperial&appid=61ad8827b626c5fad8ae7a0ba951db32";
let day = 3;


class Day4 extends React.Component {
    constructor() {
        super() 

        this.state = {
            high: [],
            low: [],
            icon: [],
            iconImg: [],
            dateRaw: [],
            dateConv: [],
        }
    }
    
    async getWeather() {
        try {
            const result = await axios.get(call)
            this.setState({ high: result.data.daily[day].temp.max })
            this.setState({ low: result.data.daily[day].temp.min })
            this.setState({ icon: result.data.daily[day].weather[0].icon})
            this.setState({ iconImg: `http://openweathermap.org/img/wn/${this.state.icon}@2x.png`})
            this.setState({ dateRaw: result.data.daily[day].dt})
        }
        catch {
            console.error("somethings not right brah")
        }
    }

    convertDate(someprop) {
        let timestamp = someprop;
        let milliseconds = timestamp * 1000
        let dateObj = new Date(milliseconds)
        let readableDate = dateObj.toLocaleString("en-US", {weekday: 'long'})
        return readableDate
    }
    componentDidMount() {
        this.getWeather()
        console.log(day + 1)
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

export default Day4;