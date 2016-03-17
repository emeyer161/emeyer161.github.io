import React from 'react';
import Radium from 'radium';

let styles = {
  main:{
    height: window.innerHeight,
    background: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6) ), url(./dist/img/workspaceBlurred.jpg)',
    backgroundAttachment:'fixed',
    backgroundPosition:'50% 65%',
    backgroundSize:'cover',
    WebkitBackgroundSize: 'cover',
    MozBackgroundSize: 'cover',
    OBackgroundSize: 'cover',
    color:'#004d00',
    textAlign:'center'
  },
  box:{
    position:'relative',
    top:'50%',
    transform:'translateY(-50%)',
    margin:'auto',
    boxSizing:'border-box',
    padding:'20px',
    width:'700px',
    opacity:'.9',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border:'4px solid white',
    color:'white',
    fontSize:'1.4rem',
    fontFamily:'verdana',
    fontWeight:'300',
    '@media (max-width: 900px)': {
        padding:'15px',
        border:'3px solid white',
        width:'600px',
        fontSize:'1.2rem',
    },
    '@media (max-width: 700px)': {
        padding:'13px',
        width:'500px',
    },
    '@media (max-width: 500px)': {
        padding:'11px',
        width:'95%',
    },
    text:{
        fontSize:'inherit'
    }
  }
};

class Hero extends React.Component {
  render(){
    return  <section id='hero' style={styles.main}>
              <div style={styles.box}>
                <h2 style={styles.text}>{'function{ WebDeveloper }'}</h2>
              </div>
            </section>;
  };
}

export default Radium(Hero);