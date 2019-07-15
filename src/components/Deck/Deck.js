import React, {Component} from 'react';
import './Deck.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types'
import Card2 from '../Card2/Card2'

class Deck extends Component {



  state = {
    cards:[{icon:"fa-diamond", open:false, match: false},
            {icon:"fa-reddit", open:false, match: false},
            {icon:"fa-birthday-cake", open:false, match: false},
            {icon:"fa-diamond", open:false, match: false}],      
    deckLocked: false  
  }

  cardsIconOption = ["fa-diamond", "fa-paper-plane-o", "fa-anchor", "fa-bolt", "fa-cube", "fa-leaf", "fa-bicycle", 
  "fa-bomb", "fa-paw", "fa-reddit", "fa-institution", "fa-birthday-cake", "fa-cab", "fa-ambulance", 
  "fa-apple", "fa-bell"]

  componentDidMount(){

  }

  componentDidUpdate(){
    console.log(this.state);
  }


  // lockingCard(array){
  //   // this.setState((previouState)=>{
      
  //   //   return previouState
  //   // })
  //   array.forEach((card) => {
  //     if(!card.match){
  //       card.locked =!card.locked
  //     }
  //   })
  // }

  matchCards(array){
    this.setState((previouState)=>{
      array.map((card) => {
        card.open = true
        card.match = true
        return card
      })
    })
  }

  closingCard(array){
    this.setState((previouState)=>{
      array.forEach((card)=>{
        if(card.open && !card.match){
          card.open = false
        } 
      })
      return array
    })
  }

  lockingDeck(){
    this.setState((previousState)=>{
      previousState.deckLocked = !previousState.deckLocked
    })
  }

  // quero que trave a carta após ser clicada até a outra fechar e ainda não sei como fazer

  onCardOpened(){

    let cardsOpened = this.state.cards.filter((card) => {return card.open && !card.match})

    if(cardsOpened.length>0){
      this.setState((previousState)=>{
        cardsOpened.forEach((card)=>{
          card.open = true
        })
      })
    }   

    if(cardsOpened.length === 2){

      if(cardsOpened[0].icon === cardsOpened[1].icon){
        this.matchCards([cardsOpened[0], cardsOpened[1]])
        console.log(cardsOpened)
      } 
      else { 
        let intervalId;
        this.setState((previousState)=>{
          previousState.deckLocked = true
         })

        intervalId = setInterval(()=>{
          clearInterval(intervalId);
          console.log(cardsOpened[0].icon, cardsOpened[1].icon)
          this.closingCard(cardsOpened)

          this.setState((previousState)=>{
            previousState.deckLocked = false
           })
          
        }, 3000)
        
      }
    }
  }
 
  onCardCliked(event){
    let index = event.currentTarget.getAttribute("identifier")

    if(this.state.cards[index].open || this.state.deckLocked){
      return
    }
    
    this.setState((previousState)=>{
      previousState.cards[index].open = !previousState.cards[index].open
      return previousState
    })
      // gambiarra
    this.setState((previousState)=>{
      this.onCardOpened();
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