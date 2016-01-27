import React from 'react';
import Radium from 'radium';

let styles={
  main:{
    width:'400px',
    height:'500px',
    background:'rgba(100,100,100,.8)',
    borderRadius:'5px',
    padding:'0'
  },
  img: {
    position:'relative',
    width: '150px',
    margin:'15px',
    borderRadius:'50%'
  }
};

class InfoCard extends React.Component {
  render(){
    return  <div style={[styles.main, this.props.position]}>
                <img style={styles.img} src='./img/grad.png' />
            </div>;
  };
}

export default Radium(InfoCard);