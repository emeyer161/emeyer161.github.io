import React from 'react';
import Radium from 'radium';

let styles = {
    main:{
        width:'inherit',
        padding:'50px 18%',
        borderTop:'4px solid rgba(173, 128, 108,1)',
        borderBottom:'4px solid rgba(173, 128, 108,1)',
        backgroundColor:'white',
        color:'#414142',
        textAlign:'center',
        fontSize:'1.3rem',
        fontFamily:'georgia',
        lineHeight:'1.4'
    },
    link:{
        position: 'relative',
        top: '-119px',
        opacity: '0'
    }
};

class AboutMe extends React.Component {
  render(){
    return  <div id="aboutMe" style={styles.main}>
                <span id='aboutLink' style={styles.link}>&nbsp;</span>
                I'm from Upstate NY, and concentrated in Neuroscience at the University of Maryland. That experience drove me to improve how people interact with technology, and each other through technology. I've always been drawn to design and build tools that enrich peoples lives. I began studying web development comprehensively, and found a way to put my experience and motivation to work, for you!
            </div>;
  };
}

export default Radium(AboutMe);