import React, { Component } from "react";
import { observer } from "mobx-react";
import { observable, action } from "mobx";

@observer
class Horoscope extends Component {
    @observable horoscopeData = null

    @observable userSign = ""

    @action changeInput = (e) => this.userSign=e.target.value;
    
    @action getMyHoroscope = () => {
        const URL = 'https://aztro.sameerkumar.website/?sign=' + this.userSign + '&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
            .then(json => { 
                this.horoscopeData = json;
                this.horoscopeData.sign = this.userSign;
            });
    }

    showHoroscope = () => {
        return (
            <div>
                <h1>{this.horoscopeData.sign}</h1>
                Current Date: {this.horoscopeData.current_date} <br />
                Compatibility: {this.horoscopeData.compatibility} <br />
                Lucky Number: {this.horoscopeData.lucky_number} <br />
                Lucky Time: {this.horoscopeData.lucky_time} <br />
                Color: {this.horoscopeData.color} <br />
                Date Range: {this.horoscopeData.date_range} <br />
                Mood: {this.horoscopeData.mood} <br />
                Description: {this.horoscopeData.description} <br />
            </div>
        );
    }

    render() {
        return (
            <div>
                <select value={this.userSign} onChange={this.changeInput}>
                    <option>Aries</option>
                    <option>Taurus</option>
                    <option>Gemini</option>
                    <option>Cancer</option>
                    <option>Leo</option>
                    <option>Virgo</option>
                    <option>Libra</option>
                    <option>Scorpio</option>
                    <option>Sagittarius</option>
                    <option>Capricorn</option>
                    <option>Aquarius</option>
                    <option>Pisces</option>
                </select>
                <input type='button' value='get my horoscope!' onClick={this.getMyHoroscope}/>
                {this.horoscopeData ? this.showHoroscope() : null}
            </div>
        );
    }
}

export default Horoscope;