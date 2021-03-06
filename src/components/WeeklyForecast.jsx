import React from 'react'
import axios from 'axios'
import Today from './Today';
import Day2 from './Day2';
import Day3 from './Day3'
import Day4 from './Day4';
import Day5 from './Day5'
import Day6 from './Day6';
import Day7 from './Day7';
import './Styles/WeeklyForecast.css'

let day = 1;
const API_KEY = `61ad8827b626c5fad8ae7a0ba951db32`;
let call = `https://api.openweathermap.org/data/2.5/onecall?lat=33.749&lon=-84.388&exclude=minutely,hourly&units=imperial&appid=${API_KEY}`;


export default class WeeklyForecast extends React.Component {
    constructor() {
        super() 

        this.state = {
            info: [],
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
            this.setState({ info: result.data })
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


// LINK EVERY OTHER DAY TO THE RETURN BELOW



    render() {
        return (
            <div>
                <h2>This week in Atlanta:</h2>
                <div className='days-container'>
                    <div className='day-card'>
                        <Today />
                    </div>
                    <div className='day-card'>
                        <Day2 />
                    </div>
                    <div className='day-card'>
                        <Day3 />
                    </div>
                    <div className='day-card'>
                        <Day4 />
                    </div>
                    <div className='day-card'>
                        <Day5 />
                    </div>
                    <div className='day-card'>
                        <Day6 />
                    </div>
                    <div className='day-card'>
                        <Day7 />
                    </div>
                </div>
                {/* <div className='weekly-div'>
                    <div className='day-card'>
                        <div className='day'>
                            <p>{this.convertDate( this.state.dateRaw )}</p>
                        </div>
                        <div className='icon'>
                            <img src={this.state.iconImg} />
                        </div>
                        <div className='high-and-low'>
                            <p><strong>{ this.state.high }</strong></p>
                            <p>{ this.state.low }</p>
                        </div>
                    </div>
                    <div className='day-card'>
                        <div className='day'>
                            <p>{this.convertDate( this.state.dateRaw )}</p>
                        </div>
                        <div className='icon'>
                            <img src={this.state.iconImg} />
                        </div>
                        <div className='high-and-low'>
                            <p><strong>{ this.state.high }</strong></p>
                            <p>{ this.state.low }</p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
