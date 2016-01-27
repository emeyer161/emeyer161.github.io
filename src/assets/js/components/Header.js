import React from 'react';
import Radium from 'radium';

let styles = {
    main: {
        position: 'fixed',
        zIndex:'10',
        width:'100%',
        height: '69px',
        top: '0px',
        left: '0px',
        right: '20px',
        fontFamily:'verdana'
    },
    mainBackground:{
        backgroundColor:'rgba(173, 128, 108, .9)'
    },
    logo:{
        position:'absolute',
        height:'100%',
        left:'50px'
    },
    icon:{
        position:'relative',
        top:'7px',
        width: '55px',
        height: '55px',
        display: 'inline-block',
        marginRight:'7px',
        borderTopRightRadius: '50%',
        borderBottomLeftRadius: '50%',
        fontSize: '17px',
        textAlign: 'center',
        lineHeight: '10px'
    },
    title:{position:'relative',
        top:'-12px',
        display:'inline-block',
        color:'white'
    },
    nav:{
        position:'absolute',
        right:'50px',
        height:'30px',
        top:'18px',
        margin:'0',
        listStyleType: 'none'
    },
    navLink:{
        height:'100%',
        // width:'100px',
        display:'inline-block',
        margin:'0 10px',
        padding: '1px 5px',
        boxSizing:'border-box',
        border:'1px solid rgba(0,0,0,0)',
        color:'white',
        textDecoration:'none',
        borderRadius:'8px',
        ':hover': {
            border:'1px solid white',
            backgroundColor: 'rgba(255, 255, 255, 0.2)'
        }
    },
    navLi:{
        position: 'relative',
        top:'50%',
        transform:'translateY(-50%)',
        width:'100%',
        textAlign:'center',
        color:'inherit'
    }
};

class Header extends React.Component {
    
    constructor(){
        super();
        this.state = {
            bgOn:false
        };
    };

    componentDidMount() {
        var docBody = document.documentElement || document.body.parentNode || document.body,
            hasOffset   = window.pageYOffset !== undefined,
            windowHeight = window.innerHeight;
        
        window.onscroll = function (e) {
            var scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;
            
            if (scrollTop+69 >= windowHeight) {    // show background
                this.setState({
                    bgOn: true
                });
            } else {    // hide background
                this.setState({
                    bgOn: false
                });
            }
        }.bind(this)
    };

    render(){
        return  <section id='header' style={[ this.state.bgOn ? styles.mainBackground : null, styles.main ]}>

                    <div style={styles.logo}>
                        <a href='/#'>
                            <img src='../../img/logo.png' style={styles.icon}/>
                            <h1 style={styles.title}>ericMeyer</h1>
                        </a>
                    </div>

                    <ul style={styles.nav}>
                        <a href='/#/' style={styles.navLink} key='about'><li style={styles.navLi}>What I Offer</li></a>
                        <a href='/#/' style={styles.navLink} key='portfolio'><li style={styles.navLi}>What I've Done</li></a>
                        <a href='/#/' style={styles.navLink} key='blog'><li style={styles.navLi}>Who I Am</li></a>
                        <a href='./#contact' style={styles.navLink} key='contact'><li style={styles.navLi}>Get In Touch</li></a>
                    </ul>

                </section>;
    };
}

var webDeveloper = 5;

var ericMeyer = function(){webDeveloper}

export default Radium(Header);