import React, {Component} from 'react';
import './Deck.css';
import PropTypes from 'prop-types'
import Card2 from '../Card2/Card2'

class Deck extends Component {

  state = {
    cards:[],      
    deckLocked: false,  
    cardQuantity: 6,
  }

  componentDidMount(){
    this.setupDeck()
  }

  setupDeck(){
    let cardsIconOption = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", 
        "fa-bomb", "fa-paw", "fa-reddit", "fa-institution", "fa-birthday-cake", "fa-cab", "fa-ambulance", 
        "fa-apple", "fa-bell", "fa-sun-o", "fa-moon-o"]

    let iconsNeeded = this.state.cardQuantity/2
    let cardsIcons = []
    for(var i = 0; i<iconsNeeded; i++){
      cardsIcons.push(cardsIconOption[i])
      cardsIcons.push(cardsIconOption[i])
    }

    // shuffle array of icons

    function shuffle(array) {
      var i = array.length,
          j = 0,
          temp;
  
      while (i--) {
          j = Math.floor(Math.random() * (i+1));
          // swap randomly chosen element with current element
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
    }
  
    cardsIcons = shuffle(cardsIcons)

    //defing cards on the deck
    let cardOnDeck = []

    function definingCardDeck(){
      for (let i =0; i< cardsIcons.length; i++){
        cardOnDeck.push({icon:`${cardsIcons[i]}`, open: false, match: false, error: false})
      }
    }
    definingCardDeck()

    this.setState((previousState)=>{
      previousState.cards = cardOnDeck
      return previousState
    })
  }
  
  // match cards 
  matchCards(array){
    array.forEach((card) => {
      card.open = true
      card.match = true
    })
  }
  //closing cards
  closingCard(array){
    array.forEach((card)=>{
      if(card.open && !card.match){
        card.open = false
      } 
    })
  }

  updateCards(previousState){

    let cardsOpened = this.state.cards.filter((card) => {return card.open && !card.match})

    if(cardsOpened.length>0){
      cardsOpened.forEach((card)=>{
        card.open = true
      })
    }   

    if(cardsOpened.length === 2){
      // comparing 2 cards
      if(cardsOpened[0].icon === cardsOpened[1].icon){
        this.matchCards([cardsOpened[0], cardsOpened[1]])
      } else { 
        let intervalId;
        previousState.deckLocked = true
        cardsOpened.forEach((card)=>{
          card.error = true
        })

        intervalId = setInterval(()=>{
          clearInterval(intervalId);
          this.setState((previousState)=>{
            console.log(JSON.stringify(cardsOpened))
            this.closingCard(cardsOpened)
            console.log(JSON.stringify(cardsOpened))
            previousState.deckLocked = false
            cardsOpened.forEach((card)=>{
              card.error = false
            })
            return previousState;
           })
        }, 1000)
      }
    }
  }
 
  onCardCliked(event){
    let index = event.currentTarget.getAttribute("identifier")
    // Locking Deck
    if(this.state.cards[index].open || this.state.deckLocked){
      return
    }
    // closing card
    this.setState((previousState)=>{
      previousState.cards[index].open = !previousState.cards[index].open
      return previousState
    })
    // gambiarra
    this.setState((previousState)=>{
      this.updateCards(previousState);
      return previousState
    })
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
                  cardMatch = {card.match}
                  cardError = {card.error}
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