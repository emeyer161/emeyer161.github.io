import React from 'react';
import Radium from 'radium';

let styles={
    main:{
        
    },
    all:{
        display:'inline-block',
        boxSizing:'border-box',
        border:'none',
        borderRadius:'5px',
        fontSize: '14px',
        fontFamily: 'inherit',
        width:'95%',
        margin:'2.5%',
        padding:'0 2.5%',
        height:'40px',
    },
    topInput:{
        '@media (min-width: 700px)': {
            width:'45%',
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
    return  <form style={[this.props.position, styles.main]}>
                <input id='name' style={[styles.all,styles.topInput]} placeholder='Name' required type='text' />
                <input id='company' style={[styles.all,styles.topInput]} placeholder='Company' />
                <input id='email' style={[styles.all,styles.topInput]} placeholder='Email'required type='text' />
                <input id='phone' style={[styles.all,styles.topInput]} placeholder='Phone' />
                <textarea id='message'  style={[styles.all,styles.messageInput]} placeholder='What can I do for you?'required type='text' rows="1" cols="26" />
                <input className="button" style={[styles.all,styles.submit]} type="submit" id='submit' value="send" />
            </form>
  };
}

export default Radium(ContactForm);
