import React from 'react';

class PrevButton extends React.Component {
  render(){
    return  <img src='./dist/img/arrowLeft.png' key='prevButton' style={this.props.style} id='prevButton' onClick={this._handleClick.bind(this)} />;
  };
  
  _handleClick(){
    this.props.onClick();
  }
}

export default PrevButton;