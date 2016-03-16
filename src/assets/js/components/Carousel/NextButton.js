import React from 'react';

class NextButton extends React.Component {
  render(){
    return  <img src='./dist/img/arrowRight.png' key='nextButton' style={this.props.style} id='nextButton' onClick={this._handleClick.bind(this)} />;
  };
  
  _handleClick(){
    this.props.onClick();
  }
}

export default NextButton;