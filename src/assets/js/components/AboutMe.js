import React from 'react';

let styles = {
  main:{
    height:'400px',
    borderTop:'4px solid rgba(173, 128, 108,1)',
    borderBottom:'4px solid rgba(173, 128, 108,1)',
    backgroundColor:'white',
    textAlign:'center'
  }
};

class AboutMe extends React.Component {
  render(){
    return  <div style={styles.main}>
              <h1>What I've Written:</h1>
            </div>;
  };
}

export default AboutMe;