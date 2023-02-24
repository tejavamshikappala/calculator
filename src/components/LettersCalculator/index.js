import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {values: 0}

  onChaning = () => {
    this.setState(prev => ({values: prev.values + 1}))
  }

  render() {
    const {values} = this.state

    return (
      <div className="forOuter">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="forImage"
        />
        <div className="forInner">
          <h1 className="forHeader">Calculate the Letters you enter</h1>
          <div className="forFor">
            <label className="forPara" htmlFor="labelText">
              Enter the phrase
            </label>
            <input
              id="labelText"
              type="text"
              placeholder="Enter the phrase"
              className="forInput"
              onChange={this.onChaning}
            />
          </div>
          <p className="forPara2">No.of letters: {values}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
