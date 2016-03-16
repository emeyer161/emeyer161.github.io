import React from 'react';
import ContactForm from './ContactForm';
import InfoCard from './InfoCard';

let styles={
    main:{
        backgroundImage:'url(./dist/img/zionPath.jpg)',
        backgroundAttachment:'fixed',
        backgroundSize:'cover',
        backgroundPosition:'90% 0%',
        textAlign:'center',
        padding:'50px 0'
    },
    infoCard:{
        verticalAlign:'top',
        display:'inline-block',
        margin:'0 calc((100% - 800px)/3) 0 0',
        '@media (max-width: 805px)':{
            margin:'0 0 50px 0'
        },
    },
    contactForm:{
        verticalAlign:'top',
        display:'inline-block',
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
                <span id='servicesLink' style={styles.link}>&nbsp;</span>
                <InfoCard position={styles.infoCard} />
                <ContactForm position={styles.contactForm} />
            </section>;
  };
}

export default Contact;