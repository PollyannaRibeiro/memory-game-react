import React, {Component} from 'react';
import './Card2.css';
import PropTypes from 'prop-types'

class Card2 extends Component{

  static propTypes = {
    cardOpened: PropTypes.bool.isRequired,
    cardMatch: PropTypes.bool.isRequired,
    cardIcon: PropTypes.string.isRequired,
    cardError: PropTypes.bool.isRequired
  }

  render(){
    
    let className = this.props.cardOpened ? "open": ""
    let cardMatch = this.props.cardMatch ? "match": ""
    let cardError = this.props.cardError ? "error": ""
    
    return(
      <div className = {`card ${className} fa ${this.props.cardIcon} ${cardMatch} ${cardError}`}></div>
    )
  }
}

export default Card2;
