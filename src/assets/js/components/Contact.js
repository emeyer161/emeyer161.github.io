import React from 'react';
import ContactForm from './ContactForm';
import InfoCard from './InfoCard';

let styles={
   main:{
      height:'600px',
      backgroundImage:'url(../../img/zionPath.jpg)',
      backgroundAttachment:'fixed',
      backgroundSize:'cover',
      backgroundPosition:'90% 0%',
      textAlign:'center'
   },
   container:{
      position:'relative',
      display:'inline-block',
      width:'70%',
      minWidth:'810px',
      top:'50px'
   },
   infoCard:{
      display:'inline-block',
      // verticalAlign:'bottom',
      float:'left',
      margin:'auto'
   },
   contactForm:{
      display:'inline-block',
      float:'right',
      margin:'auto'
   }
};

class Contact extends React.Component {
  render(){
    return  <section id='contact' style={styles.main}>
               <div style={styles.container}>
                  <InfoCard position={styles.infoCard} />
                  <ContactForm position={styles.contactForm} />
               </div>
            </section>;
  };
}

export default Contact;