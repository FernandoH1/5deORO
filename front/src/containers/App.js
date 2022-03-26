import React, { Component } from 'react'
import From from '../components/From'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>5 De ORO</h3>
        <p>Sistema de Loteria Random</p>
        <From />
        <Result />
      </div>
    )
  }
}

export default App


