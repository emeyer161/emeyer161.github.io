import React from 'react';
import DecoratedCarousel from './Carousel/DecoratedCarousel';

let styles = {
    main:{
        padding:'2% 0',
        backgroundColor:'rgba(0, 0, 0,.9)',
        color:'white',
        textAlign:'center'
    },
    title:{
        fontFamily:'verdana',
        fontSize:'1.8rem',
        margin:'0 0 2% 0'
    },
    carousel:{
        width:'100%',
        height:'300px',
        display:'inline-block',
        dotColor:'#ad806c'
    },
    link:{
        position: 'relative',
        top: '-109px',
        opacity: '0'
    }
};

class FeaturedWork extends React.Component {
    constructor(){
        super();
        this.state = {
            slides: [
                { id: 0, title: 'The Riverstone Center', body: 'A small business massage studio website offering information on services provided.', src: './dist/img/theRiverstoneCenter.png' },
                { id: 1, title: 'Middle Cities', body: 'A quiz app testing knowledge of city population data.', src: './dist/img/middleCitiesLogo.png' },
                { id: 2, title: 'Checkingtons Listables', body: 'A simple but functional shopping checklist app', src: './dist/img/checkingtonsListablesLogo.png' },
                { id: 3, title: '#Guess', body: 'A quiz app implementing the Instagram API', src: './dist/img/guessLogo.png' },
            ]
        };
    }

    render(){
        return  <div id="featuredWork" style={styles.main}>
                    <span id='featuredLink' style={styles.link}>&nbsp;</span>
                    <h1 style={styles.title}>Featured Work</h1>
                    <DecoratedCarousel slides={this.state.slides} show={1} delay={4} pagination={true} buttons={true} displayInfo={this.props.large ? 'right' : 'below'} style={styles.carousel}  />
                </div>;
    };
}

export default FeaturedWork;