import React, { Component } from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'

class WeatherList extends Component {

  renderWeather = (cityData) => {

    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)

    return (
      <tr key={name}>
        <td className='chart left'>{name}</td>
        <td className='chart center'><Chart data={temps} color="orange" unit="K"/></td>
        <td className='chart center'><Chart data={pressures} color="green" unit="hPa"/></td>
        <td className='chart center'><Chart data={humidities} color="black" unit="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <div className="col-md-8 col-md-offset-2 data">
        <table className="table table-hover">
          <thead>
          <tr>
            <th className='left'>City</th>
            <th className='center'>Temperature (K)</th>
            <th className='center'>Pressure (hPa)</th>
            <th className='center'>Humidity (%)</th>
          </tr>
          </thead>
          <tbody>
            {this.props.weather.map(this.renderWeather)}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)