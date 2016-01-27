import React from 'react';

let styles = {
  main:{
    height: window.innerHeight,
    background: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6) ), url(./dist/img/workspaceBlurred.jpg)',
    backgroundAttachment:'fixed',
    backgroundPosition:'50% 65%',
    backgroundSize:'cover',
    color:'#004d00',
    textAlign:'center'
  },
  box:{
    position:'relative',
    top:'50%',
    transform:'translateY(-50%)',
    margin:'auto',
    padding:'20px',
    width:'700px',
    opacity:'.9',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border:'4px solid white',
    color:'white',
    fontSize:'30px',
    fontFamily:'verdana',
    fontWeight:'300'
  }
};

class Hero extends React.Component {
  render(){
    return  <section id='hero' style={styles.main}>
              <div style={styles.box}>
                <h2>{'function{ WebDeveloper }'}</h2>
              </div>
            </section>;
  };
}

export default Hero;