import React, {Component} from 'react';
import './Timer.css';
import PropTypes from 'prop-types'

export const TimerState = {
  Initial: 'Initial',
  Stated: 'Stated',
  Ended: 'Ended'
}

class Timer extends Component{
  static propTypes = {
    state: PropTypes.oneOf(Object.keys(TimerState)).isRequired
  }

  state = {
    timeCounter:0
  }

  time1;
  interval;

  componentDidUpdate(prevProps) {

    if (prevProps.state === this.props.state) {
      return;
    }

    console.log(this.props.state)

    if (this.props.state === TimerState.Initial) {
      this.setState((previousState)=>{
        previousState.timeCounter = 0
        return previousState
      })
      clearInterval(this.interval)
    } else if (this.props.state === TimerState.Stated) {
      this.setupTimer()
    } else if (this.props.state === TimerState.Ended) {
      clearInterval(this.interval)
    }
  } 

  setupTimer(){
    this.time1 = new Date()

    this.interval = setInterval(()=>{
      
      let time2 = new Date()

      const diff = time2.getTime() - this.time1.getTime();
      let totalTime = Math.floor(diff/1000);
      this.setState((previousState)=>{
        previousState.timeCounter = totalTime;
        return previousState
      })
      return totalTime;
    }, 1000);   
}

  render(){

    let finalTime = this.state.timeCounter
    return (
      <span id="timer">{`Timer: ${finalTime}`}</span>
    )
  }
}

export default Timer