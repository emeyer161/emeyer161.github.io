import React from 'react';
import Radium from 'radium';


let styles = {
    main:{
        width:'inherit',
        padding:'50px 18%',
        backgroundColor:'white',
        color:'#414142',
        textAlign:'center',
        fontSize:'1.3rem',
        fontFamily:'georgia',
        lineHeight:'1.4',
        '@media (max-width: 600px)': {
            fontSize: '4vw'
        },
    }
};

class Offering extends React.Component {

    render(){
        return  <div id="offering" style={styles.main}>
                    I would love to <i>design</i> you a beautiful responsive web application, develop the <i>front-end</i> for seamless user interaction, and program solid application logic on the <i>back-end</i> for the heavy lifting and database interaction. My work spans from aesthetic static pages to deeply functional full scale applications.
                </div>;
    };
};

export default Radium(Offering);