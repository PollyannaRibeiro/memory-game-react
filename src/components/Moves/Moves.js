import React, {Component} from 'react';
import PropTypes from 'prop-types'

class Moves extends Component{
  static propTypes = {
    movements: PropTypes.number.isRequired
  }

  render(){
    let moves = this.props.movements>1 ? "moves": "move"
    return(
      <span className="moves">{`${this.props.movements} ${moves}`}</span>
    )
  }
}

export default Moves