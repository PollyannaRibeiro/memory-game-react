import React, {Component} from 'react';
import './Card2.css';
import PropTypes from 'prop-types'
import Deck from '../Deck/Deck';

class Card2 extends Component{

  static propTypes = {
    cardOpened: PropTypes.bool.isRequired,
    cardMatch: PropTypes.bool.isRequired,
    cardIcon: PropTypes.string.isRequired,
  }

  render(){
    
    let className = this.props.cardOpened ? "open": ""

    return(
      <div className = {`card ${className} fa ${this.props.cardIcon}`}>

      </div>
    )
  }
}

export default Card2;
