import React, {Component} from 'react';
import './Deck.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'
import Card2 from '../Card2/Card2'

class Deck extends Component {



  state = {
    cards:[{icon:"fa-diamond", open:false, locked: false},
            {icon:"fa-reddit", open:false, locked: false},
            {icon:"fa-birthday-cake", open:false, locked: false},
            {icon:"fa-diamond", open:false, locked: false}],      
      
  }

  cardsIconOption = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", 
  "fa-bomb", "fa-paw", "fa-reddit", "fa-institution", "fa-birthday-cake", "fa-cab", "fa-ambulance", 
  "fa-apple", "fa-bell"]

  componentDidMount(){


  }


  // onCardOpened(){
  //   this.setState((previousState)=>{
  //     previousState.cardOpened =!previousState.cardOpened
  //     console.log("onCardOpened working")
  //     return previousState
  //   })
    
  // }
  

  onCardOpened(){
    let cardsOpened = this.state.cards.filter(card => card.open)
    console.log(cardsOpened)

    if(cardsOpened.length === 2){
      if(cardsOpened[0].icon === cardsOpened[1].icon){
        this.lockCard()
      } else {
        let intervalId;
        intervalId = setInterval(()=>{
          clearInterval(intervalId);
          console.log("oi")
          this.setState((previousState)=>{
            previousState.cards.forEach((card)=>{
              if(card.open){
                card.open = !card.open
              }
              
            })
            return previousState
          })
          
        }, 3000)
      }
    }
  }

  lockCard(){

    this.setState((previousState)=>{
      previousState.cards.map((card)=>{
        card.locked = true
        card.onclick = null

      })
      
      return previousState
    })
  }
 
  onCardCliked(event){
    console.log(event)
    console.log(event.currentTarget.getAttribute("identifier"))
    let index = event.currentTarget.getAttribute("identifier")
    this.setState((previousState)=>{
      previousState.cards[index].open = !previousState.cards[index].open
      return previousState
    })

    // gambiarra
    this.setState((previousState)=>{
      this.onCardOpened();
      return previousState
    })
    
    


    // this.setState(()=>{})
  }
  

  render(){
    let cards = this.state.cards;

    return(
      <div className="container">
        <ul className="deck">

          {
            cards.map((card, index)=>(
              
              <li key = {index} identifier={index}
                  onClick={this.onCardCliked.bind(this)}
                  >
                <Card2 
                  cardOpened = {card.open}
                  cardIcon = {card.icon} 
                  cardLocked = {card.locked}
    
                  
                  >
                </Card2>
                </li>
            ))
          }
          
        </ul>
        
        
      
        
      
       

      </div>

    )
  }
}

export default Deck;