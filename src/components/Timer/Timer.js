import React, {Component} from 'react';
import './Timer.css';
import PropTypes from 'prop-types'

class Timer extends Component{
  static propTypes = {
    startStop: PropTypes.bool.isRequired,
  }

  state = {
    timeCounter:0
  }

  time1;
  interval;

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.startStop !== prevProps.startStop) {
      if(this.props.startStop){
        this.setupTimer()
      } else{
        clearInterval(this.interval)
      }
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