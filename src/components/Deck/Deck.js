import React, {Component} from 'react';
import './Deck.css';
import Card from '../Card/Card';

class Deck extends Component {
  state = {
    cardsQuantity:16,
    cardClicked: false,
    cardOpened: false,
    


  }

  onCardOpened(){
    this.setState((previousState)=>{
      previousState.cardOpened =!previousState.cardOpened
      console.log("onCardOpened working")
      return previousState
    })
  }

  onCardClicked() {
    this.setState((previousState)=>{
      previousState.cardClicked = !previousState.cardClicked

      this.onCardOpened()
      console.log("clicado")
      return previousState
    })
  }

  
  

  render(){
    return(
      <div className="container">
        <Card 
          cardClicked={this.state.cardClicked} 
          onCardClicked={this.onCardClicked.bind(this)}
          cardOpened= {this.state.cardOpened}
          >
        </Card>
        
      </div>

    )
  }
}

export default Deck;