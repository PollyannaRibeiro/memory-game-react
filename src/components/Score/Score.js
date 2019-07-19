import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './Score.css';

class Score extends Component{

  static propTypes = {
    movements: PropTypes.number.isRequired
  }

  starScore(){
    this.setState((previousState)=>{
      previousState.stars.splice(0, 1)
      previousState.stars.push("fa-star-o")
      return previousState
    })
    return
  }

  stars

  scoreDown(){
    let movesCounting = this.props.movements

    if(movesCounting>=0 && movesCounting < 4){
      this.stars =  ["fa-star", "fa-star", "fa-star"]
      return this.stars

    } else if(movesCounting >= 4 && movesCounting<6){
      this.stars =  ["fa-star", "fa-star", "fa-star-o"]
      return this.stars

    }else if(movesCounting>=6){
      this.stars =  ["fa-star", "fa-star-o", "fa-star-o"]
      return this.stars
    }  
  }

  render(){
    let stars = this.scoreDown()

    return(
      <span>
        <ul className="stars">
          {
            stars.map((icon, index)=>(
              <li className={`fa ${icon}`} key= {`star${index}`}></li>
            ))
          }
        </ul>
      </span>
    )
  }
}

export default Score