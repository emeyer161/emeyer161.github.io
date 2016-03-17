import React from 'react';
import Radium from 'radium';

let styles={
    main:{

    },
    portrait: {
        position:'relative',
        width: '70%',
        margin:'2% 15%',
        borderRadius:'50%'
    },
    textBox:{
        display:'inline-block',
        boxSizing:'border-box',
        height:'40px',
        margin:'1%',
        padding:'4px',
        borderRadius:'5px',
        fontSize: '.9rem',
        fontWeight: '500',
        textAlign:'left',
        background:'#ad806c',
        color:'white',
    },
    topBox:{
        width:'98%',
        '@media (max-width: 550px)': {
            width:'31%',
        },
    },
    bottomBox:{
        width:'48%',
        '@media (max-width: 1100px)': {
            width:'98%',
        },
        '@media (max-width: 550px)': {
            width:'31%',
        },
    },
    icon:{
        display:'inline-block',
        height:'100%'
    },
    text:{
        display:'inline-block',
        marginLeft:'1%',
        verticalAlign:'40%'
    },
    a:{},
};

class ContactInfo extends React.Component {
  render(){
    return  <div style={[styles.main, this.props.position]}>
                <img style={styles.portrait} src='./dist/img/grad.png' />

                <a href="tel:518-605-0013">
                    <div style={[styles.textBox, styles.topBox]}>
                        <img src='./dist/img/contact/phoneLogo.png' style={styles.icon} />
                        <div style={styles.text}>{window.innerWidth>1000 ? "+1 (518) 605-0013" : "Call Me"}</div>
                    </div>
                </a>
                <a href='mailto:meyer.ej@gmail.com?Subject=Web%20Development%20Inquiry'>
                    <div style={[styles.textBox, styles.topBox]}>
                        <img src='./dist/img/contact/emailLogo.png' style={styles.icon} />
                        <div style={styles.text}>{window.innerWidth>1000 ? "meyer.ej@gmail.com" : "Email Me"}</div>
                    </div>
                </a>
                <a href='skype:emeyer161?call'>
                    <div style={[styles.textBox, styles.bottomBox]}>
                        <img src='./dist/img/contact/skypeLogo.png' style={styles.icon} />
                        <div style={styles.text}>Skype</div>
                    </div>
                </a>
                <a href='https://github.com/emeyer161' target='_blank'>
                    <div style={[styles.textBox, styles.bottomBox]}>
                        <img src='./dist/img/contact/githubLogo.png' style={styles.icon} />
                        <div style={styles.text}>Github</div>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/eric-meyer-4b829789' target='_blank'>
                    <div style={[styles.textBox, styles.bottomBox]}>
                        <img src='./dist/img/contact/linkedinLogo.png' style={styles.icon} />
                        <div style={styles.text}>LinkedIn</div>
                    </div>
                </a>
                <a href='./dist/Meyer_Resume.pdf' target='_blank'>
                    <div style={[styles.textBox, styles.bottomBox]}>
                        <img src='./dist/img/contact/resumeLogo.png' style={styles.icon} />
                        <div style={styles.text}>Resume</div>
                    </div>
                </a>
                <a href='https://www.instagram.com/flyrmyr/' target='_blank'>
                    <div style={[styles.textBox, styles.bottomBox]}>
                        <img src='./dist/img/contact/instagramLogo.png' style={styles.icon} />
                        <div style={styles.text}>Instagram</div>
                    </div>
                </a>
            </div>;
  };
}

export default Radium(ContactInfo);