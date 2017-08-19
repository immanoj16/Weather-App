import React, { Component } from 'react'

class SearchBar extends Component {

  constructor (props) {
    super (props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (e) {
    console.log(e.target.value)
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit (e) {
    e.preventDefault()
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

export default SearchBar