import React, {Component} from 'react';
import './Card.css';
import PropTypes from 'prop-types'
import Deck from '../Deck/Deck';


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
    
    if(this.props.cardOpened){
      return "open"
    } else {
      return "close"
    }     
  }

  // checkCard(){
  //   this.setState((previousState)=>{
  //     if(this.props.cardOpened){
  //       previousState.class = `${previousState.class} open `
  //     } else {
  //       previousState.class = `${previousState.class} close `
  //     }
  //     return previousState
  //   }) 
  // }

  // getClass(elem){
  //   this.setState((previousState)=>{
  //     previousState.class =  `${previousState.class} ${elem} `
  //     return previousState
  //   })
  // }

  // creatingCard(){
  //   let qty = this.state.cardQuantity
  //   let icons = this.state.icons

    
  //   for (let i = qty; i/2<= icons.length; i--){
  //     <li className={`${this.state.class} ${this.checkCard()} ${icons[i]}`} key= {`${icons[i]}`} onClick={this.props.onCardClicked}></li>  
  //   }
  //   return
  // }

 
 

  render(){

    let icons = this.state.icons;

    return(
      <div>
        <ul className="deck">
          {/* {this.creatingCard()} */}


          {icons.map((icon)=>( 
            <li className={`${this.state.class} ${this.checkCard()} ${icon}`} key= {`${icon}`} onClick={this.props.onCardClicked}></li>  
          ))
          }
        </ul>
      </div>
    )
  }
}

export default Card;

