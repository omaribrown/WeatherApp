import React from 'react'
import axios from 'axios'

export default class Test extends React.Component {
    constructor() {
        super() 

        this.state = {
            info: [],
        }
    }
    
    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?lat=33.749&lon=-84.388&appid=61ad8827b626c5fad8ae7a0ba951db32')
        .then(res => this.setState({ info: res.data }))
        .then(res => console.log(this.state.info))
        .catch(err => console.error(err.message))

    }
    render() {
        return (
            <div>
                <h1>Testing api call</h1>
                {
                    this.state.info.map(weather => {
                        return (
                            <div className='weather-div'>
                                <h1></h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
