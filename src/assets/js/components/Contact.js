import React from 'react';
import Radium from 'radium';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

let styles={
    main:{
        backgroundImage:'url(./dist/img/zionPath.jpg)',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundPosition:'90% 0%',
        textAlign:'center',
        padding:'2% 0'
    },
    contactBox:{
        width:'65%',
        margin:'auto',
        boxSizing:'borderBox',
        padding:'2px',
        background:'rgba(100,100,100,.8)',
        borderRadius:'5px',
        '@media (max-width: 1250px)': {
            width:'76%',
        },
        '@media (max-width: 950px)': {
            width:'87%',
        },
        '@media (max-width: 650px)': {
            width:'98%',
        },
    },
    contactInfo:{
        display:'inline-block',
        width:'35%',
        '@media (max-width: 550px)': {
            width:'95%',
            margin:'2.5%'
        },
    },
    contactForm:{
        display:'inline-block',
        width:'65%',
        '@media (max-width: 550px)': {
            width:'95%',
            margin:'2.5%'
        },
    },
    link:{
        position: 'relative',
        top: '-69px',
        opacity: '0'
    }
};

class Contact extends React.Component {
  render(){
    return  <section id='contact' style={styles.main}>
                <span id='contactLink' style={styles.link}>&nbsp;</span>
                <div style={styles.contactBox} id='contactBox' >
                    <ContactInfo position={styles.contactInfo} large={this.props.large} />
                    <ContactForm position={styles.contactForm} />
                </div>
            </section>;
  };
}

export default Radium(Contact);