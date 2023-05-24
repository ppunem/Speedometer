// Write your code here
import Component from 'react'
import './index.css'

class Speedometer extends Component{
    state={count=0}

    render(){
        const {count}=this.state

        render(){
            return (
                <div className="bg">
                  <h1 className=main-heading>SPEEDOMETER</h1>
                  <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className="heading"/>
                <h1 className="heading">Speed is <span>{count}</span>mph</h1>
                <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
                <div>
                    <button className="btn1" type="button">Accelerate</button>
                    <button className="btn2" type="button">Apply Brake</button>
                </div>
                </div>
            )
        }
    }
}

export default Speedometer