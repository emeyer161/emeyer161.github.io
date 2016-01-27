import React from 'react';
// import Carousel from './Carousel';
// import Carousel2 from './Carousel2';
import DecoratedCarousel from './DecoratedCarousel';

let styles = {
  main:{
    // height:'700px',
    padding:'75px 0',
    backgroundColor:'rgba(0, 0, 0,.9)',
    color:'white',
    textAlign:'center'
  },
  description:{
    padding:'20px 15%'
  }
};

class FeaturedWork extends React.Component {
  constructor(){
        super();
        this.state = {
          slides: [
                { id: 0, title: 'The Riverstone Center', description: 'A small business massage studio website offering information on services provided.', src: './dist/img/theRiverstoneCenter.jpg' },
                { id: 1, title: 'Middle Cities', description: 'A quiz app testing knowledge of city population data.', src: './dist/img/middleCitiesLogo.png' },
                { id: 2, title: 'Checkingtons Listables', description: 'A simple but functional shopping checklist app', src: './dist/img/checkingtonsListablesLogo.png' },
                { id: 3, title: '#Guess', description: 'A quiz app implementing the Instagram API', src: './dist/img/guessLogo.png' },
            ]
        };
  }
  render(){
    return  <div style={styles.main}>
              <h1>What I've Done:</h1>
              <DecoratedCarousel show={3} width={'100%'} height={'300px'} slides={this.state.slides} />
            </div>;
  };
}

export default FeaturedWork;