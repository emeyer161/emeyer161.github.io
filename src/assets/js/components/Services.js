import React from 'react';
import Radium from 'radium';

import Offering from './Offering';
import Skills from './Skills';


let styles = {
    main:{
        borderTop:'4px solid rgba(173, 128, 108,1)',
        borderBottom:'4px solid rgba(173, 128, 108,1)',
    },
    link:{
        position: 'relative',
        top: '-69px',
        opacity: '0'
    }
};

class Services extends React.Component {

    render(){
        return  <section id="services" style={styles.main}>
                    <span id='servicesLink' style={styles.link}>&nbsp;</span>
                    <Offering />
                    <Skills />
                </section>;
    };
}

export default Radium(Services);