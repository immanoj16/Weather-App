import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWeather } from "../actions/index";

class SearchBar extends Component {

  constructor (props) {
    super (props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (e) {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit (e) {
    e.preventDefault()

    this.props.fetchWeather(this.state.term)
    this.setState({ term: '' })
  }

  render () {
    return (
      <div className='col-md-8 col-md-offset-2 search'>
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Get a five-day forcast in your favourite cities'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className='input-group-btn'>
            <button className='btn btn-primary' type='submit'>Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)