import React from 'react';

let styles = {
  main:{
    fontSize:'.9rem',
    backgroundColor:'black',
    padding:'20px 5%',
    color:'white'
  }
};

class Footer extends React.Component {
  render(){
    return  <section id="footer" style={styles.main}>
              <div>©Copyright 2015 / All Rights Reserved</div>
            </section>;
  };
}

export default Footer;