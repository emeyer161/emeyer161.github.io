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
        padding:'50px 0'
    },
    contactBox:{
        width:'60%',
        margin:'auto',
        background:'rgba(100,100,100,.8)',
        borderRadius:'5px',
        '@media (max-width: 1200px)': {
            width:'72%',
        },
        '@media (max-width: 900px)': {
            width:'85%',
        },
        '@media (max-width: 600px)': {
            width:'98%',
        },
    },
    contactInfo:{
        display:'inline-block',
        width:'30%',
        '@media (max-width: 450px)': {
            width:'95%',
            margin:'2.5%'
        },
    },
    contactForm:{
        display:'inline-block',
        width:'70%',
        '@media (max-width: 450px)': {
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
                    <ContactInfo position={styles.contactInfo} />
                    <ContactForm position={styles.contactForm} />
                </div>
            </section>;
  };
}

export default Radium(Contact);