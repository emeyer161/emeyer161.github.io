import React from 'react';
import Radium from 'radium';

let styles={
    main:{
        verticalAlign:'top'
    },
    title:{
        fontSize:'1.2rem',
        color:'white',
    },
    all:{
        display:'inline-block',
        boxSizing:'border-box',
        border:'none',
        borderRadius:'5px',
        fontSize: '1rem',
        fontFamily: 'inherit',
        width:'98%',
        margin:'1%',
        padding:'0 2.5%',
        height:'40px',
    },
    topInput:{
        '@media (min-width: 700px)': {
            width:'48%',
        },
    },
    messageInput:{
        height:'300px',
        padding:'2.5%'
    },
    submit:{
        background:'#ad806c',
        color:'white',
        fontSize: '18px',
        fontWeight: '600',
    }
};

class ContactForm extends React.Component {
  render(){
    return  <form id='contactForm' style={[this.props.position, styles.main]} method='POST' action='http://formspree.io/meyer.ej@gmail.com'>
                <h1 style={styles.title}>Get In Touch</h1>

                <input type="hidden" name="_next" value="/" />
                <input type="hidden" name="_subject" value="Web Development Inquiry" />
                
                <input name='name' id='name' style={[styles.all,styles.topInput]} placeholder='Name' required type='text' />
                <input name='company' id='company' style={[styles.all,styles.topInput]} placeholder='Company' />
                <input name='_replyto' id='email' style={[styles.all,styles.topInput]} placeholder='Email'required type='text' />
                <input name='phone' id='phone' style={[styles.all,styles.topInput]} placeholder='Phone' />
                <textarea name='message' id='message' style={[styles.all,styles.messageInput]} placeholder='What can I do for you?'required type='text' rows="1" cols="26" />
                <button className="button" name="submit" type="submit" id='submit'style={[styles.all,styles.submit]}>Send</button>
           
            </form>
  };
}

export default Radium(ContactForm);
