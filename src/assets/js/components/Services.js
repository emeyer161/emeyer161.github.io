import React from 'react';
import Radium from 'radium';

import Offering from './Offering';
import Skills from './Skills';


let styles = {
    main:{
        borderTop:'4px solid rgba(173, 128, 108,1)',
        borderBottom:'4px solid rgba(173, 128, 108,1)',
    }
};

class Services extends React.Component {

    render(){
        return  <section id="services" style={styles.main}>
                    <Offering />
                    <Skills />
                </section>;
    };
}

export default Radium(Services);