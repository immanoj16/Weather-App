import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherList extends Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <table className="table table-hover">
          <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
          </thead>
          <tbody>

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