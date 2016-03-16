import React from 'react';
import Radium from 'radium';

let styles={
    main:{

    },
    img: {
        position:'relative',
        width: '90%',
        margin:'5%',
        borderRadius:'50%'
    },
    textBox:{
        display:'inline-block',
        boxSizing:'border-box',
        height:'40px',
        width:'95%',
        margin:'2.5%',
        padding:'2.5%',
        border:'none',
        borderRadius:'5px',
        fontSize: '18px',
        fontWeight: '600',
        background:'#ad806c',
        color:'white',
        '@media (max-width: 450px)': {
            width:'45%',
        },
    }
};

class ContactInfo extends React.Component {
  render(){
    return  <div style={[styles.main, this.props.position]}>
                <img style={styles.img} src='./dist/img/grad.png' />
                <div style={styles.textBox}>518-605-0013</div>
                <div style={styles.textBox}>meyer.ej@gmail.com</div>
                <div style={styles.textBox}>Skype</div>
                <div style={styles.textBox}>LinkedIn</div>
                <div style={styles.textBox}>Instagram</div>
            </div>;
  };
}

export default Radium(ContactInfo);