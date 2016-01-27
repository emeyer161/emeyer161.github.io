import React from 'react';
import Radium from 'radium';

let styles={
  main:{
    height:'500px',
    width:'400px',
    background:'rgba(100,100,100,.8)',
    borderRadius:'5px',
    padding:'0'
  },
  form:{

  },
  topInput:{
    height:'40px',
    width:'160px',
    margin:'10px',
    border:'none',
    background:'white',
    borderRadius:'5px',
    padding:'0px 10px',
    fontSize: '14px'
  },
  messageInput:{
    width:'360px',
    margin:'10px',
    height:'280px',
    border:'none',
    background:'white',
    borderRadius:'5px',
    padding:'10px',
    fontSize: '14px'
  },
  submit:{
    width:'380px',
    margin:'10px',
    height:'40px',
    border:'none',
    background:'#ad806c',
    color:'white',
    borderRadius:'5px',
    padding:'0',
    fontSize: '14px'
  }
};

class ContactForm extends React.Component {
  render(){
    return  <div style={[styles.main, this.props.position]}>
                <form style={styles.form}>
                    <input id='name' style={styles.topInput} placeholder='Name' required type='text' />
                    <input id='company' style={styles.topInput} placeholder='Company' />
                    <input id='email' style={styles.topInput} placeholder='Email'required type='text' />
                    <input id='phone' style={styles.topInput} placeholder='Phone' />
                    <textarea id='message'  style={styles.messageInput} placeholder='What can I do for you?'required type='text' rows="1" cols="26" />
                    <input className="button" style={styles.submit} type="submit" id='submit' value="send" />
                </form>
            </div>
  };
}

export default Radium(ContactForm);
