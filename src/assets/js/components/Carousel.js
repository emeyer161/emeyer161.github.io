import React from 'react';
import Radium from 'radium';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import PrevButton from './PrevButton';
import NextButton from './NextButton';

let styles = {
    wrapper:{
        position: 'relative',
        width: '100%'
    },
    slideReel:{
        position:'relative',
        width:'90%',
        left:'5%',
        display:'flex',
        height:'100%'
    },
    slide:{
        display: "inline-block",
        height: "100%"
    },
    img:{
        width: "95%",
        maxHeight:'400px',
        backgroundColor: 'white',
        WebkitBoxReflect: 'below 0 -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.3, transparent), to(rgba(0,0,0,0.3)))'
    },
    centerImg:{
        marginBottom:'0px'
    },
    description:{
        padding:'20px 15%'
    }
};

class Carousel extends React.Component {
    
    constructor(){
        super();
        this.state = {
            leftImage: 0,
            show: 3,
            centerDistinction:.5,
            slides: [
                { id: 0, title: 'The Riverstone Center', description: 'A small business massage studio website offering information on services provided.', src: './dist/img/theRiverstoneCenter.jpg' },
                { id: 1, title: 'Middle Cities', description: 'A quiz app testing knowledge of city population data.', src: './dist/img/middleCitiesLogo.png' },
                { id: 2, title: 'Checkingtons Listables', description: 'A simple but functional shopping checklist app', src: './dist/img/checkingtonsListablesLogo.png' },
                { id: 3, title: '#Guess', description: 'A quiz app implementing the Instagram API', src: './dist/img/guessLogo.png' }
            ]
        };
    }
    
    // componentDidMount(){
    //     this._interval = setInterval(() => {
    //         this.nextSlide();
    //     },4*1000);
    // }
    
    // componentWillUnmount(){
    //     clearInterval(this._interval);
    // }
    
    nextSlide(){
        if (this.state.leftImage == this.state.slides.length-1){
            this.setState({
               leftImage:0
            });
        } else {
            this.setState({
               leftImage:this.state.leftImage+1
            });
        }
    }
    
    prevSlide(){
        if (this.state.leftImage == 0){
            this.setState({
               leftImage:this.state.slides.length-1
            });
        } else {
            this.setState({
               leftImage:this.state.leftImage-1
            });
        }
    }
    
    centerThis(id){
        if ((id-Math.floor(this.state.show/2))<0){
            this.setState({
               leftImage:(this.state.slides.length)+(id-Math.floor(this.state.show/2))
            });   
        } else {
            this.setState({
               leftImage:id-Math.floor(this.state.show/2)
            });  
        }
    }
    
    getActiveSlide(){
        if (this.state.leftImage + Math.floor(this.state.show/2) > this.state.slides.length-1){
            return this.state.slides[this.state.leftImage + Math.floor(this.state.show/2)-this.state.slides.length];
        } else {
            return this.state.slides[this.state.leftImage + Math.floor(this.state.show/2)];
        }
    }
    
    render(){
        var commonWidth = 100/(this.state.show + this.state.centerDistinction);
        var centerWidth = commonWidth * (1+this.state.centerDistinction);
        
        var visibleSlides = this.state.slides.slice( this.state.leftImage, (this.state.leftImage + this.state.show));
        if(visibleSlides.length < this.state.show){
            visibleSlides = visibleSlides.concat(this.state.slides.slice(0, this.state.show - visibleSlides.length));
        }
        
        
        return  <div style={styles.wrapper} id='carousel'>
                    <div style={{position:'relative', height:'450px'}}> 
                        <PrevButton onClick={this.prevSlide.bind(this)} />
                        <div style={styles.slideReel}>
                            {visibleSlides.map((slide, i) => {
                                return i==Math.floor(this.state.show/2)
                                    ?   <div key={i}    style={[styles.slide,{width:centerWidth+'%'}]}>
                                            <img src={slide.src} onClick={function(){this.centerThis(slide.id)}.bind(this)}
                                                style={[styles.img,styles.centerImg]} />
                                            <h3><big>{slide.title}</big></h3>
                                        </div>
                                
                                    :   <div key={i}    style={[styles.slide,{width:commonWidth+'%'}]}>
                                            <img src={slide.src} onClick={function(){this.centerThis(slide.id)}.bind(this)}
                                                style={styles.img}/>
                                            <h3><small>{slide.title}</small></h3>
                                        </div>;
                            })}
                        </div>
                        <NextButton onClick={this.nextSlide.bind(this)} />
                    </div>
                    
                    <div style={styles.description}>
                        <p>{this.getActiveSlide().description}<br />
                        <a>See active site</a></p>
                    </div>
                
                </div>;
    }
    
}

export default Radium(Carousel);
