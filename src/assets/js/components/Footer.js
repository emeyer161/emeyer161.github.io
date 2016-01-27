import React from 'react';

let styles = {
  main:{
    height:'100px',
    backgroundColor:'black',
    padding:'20px 100px',
    color:'white'
  }
};

class Footer extends React.Component {
  render(){
    return  <section id="footer" style={styles.main}>
              <a href='https://github.com/emeyer161' target='_blank'><img src='./dist/img/githubLogo.png' height="40px" /></a>
              <a href='https://www.linkedin.com/in/eric-meyer-4b829789' target='_blank'><img src='./dist/img/linkedinLogo.png' height="40px" /></a>
              <a href='https://www.instagram.com/flyrmyr/' target='_blank'><img src='./dist/img/instagramLogo.png' height="40px" /></a>
              <br />
              <div>©Copyright 2015 / All Rights Reserved</div>
            </section>;
  };
}

export default Footer;