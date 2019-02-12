import React, {Component} from 'react';
import './Card.css';
import PropTypes from 'prop-types'

let openClass =" oi"

class Card extends Component{

  static propTypes = {
    cardClicked: PropTypes.bool.isRequired,
    onCardClicked: PropTypes.func.isRequired,
    cardOpened: PropTypes.bool.isRequired,
  }

  state ={
    cardQuantity: 16,
    icons:["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", 
          "fa-bomb", "fa-paw", "fa-reddit", "fa-institution", "fa-birthday-cake", "fa-cab", "fa-ambulance", 
          "fa-apple", "fa-bell",
          "fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", 
          "fa-bomb", "fa-paw", "fa-reddit", "fa-institution", "fa-birthday-cake", "fa-cab", "fa-ambulance", "fa-apple", "fa-bell"],

    
    cardShowed: false,
    class: "card fa "
  }

  checkCard(){
    this.setState((previousState)=>{
      if(this.props.cardOpened){
        previousState.class = `${previousState.class} open `
      } else {
        previousState.class = `${previousState.class} close `
      }
      return previousState.class
    }) 
  }

  getClass(){
    this.checkCard()
  }

 

  render(){

    let icons = this.state.icons;
    let cardClassname = "card fa "

    return(
      <div>
        <ul className="deck">

          {icons.map((icon)=>( 
            <li className={cardClassname + icon} onClick={this.props.onCardClicked}></li>  
          ))
          }
        </ul>
      </div>
    )
  }
}

export default Card;

