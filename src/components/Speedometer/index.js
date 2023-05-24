// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  increase = () => {
    this.setState(prevState => ({count: prevState.counter + 1}))
  }
  brake = () => {
    this.setState(prevState => ({count: prevState.counter - 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="main-heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="heading">`Speed is ${count}mph`</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons-container">
          <button type="button" className="btn1" onClick={this.increase}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
