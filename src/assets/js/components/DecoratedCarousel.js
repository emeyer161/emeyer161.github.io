import React from 'react';
import Radium from 'radium';
import Carousel2 from './Carousel2';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

class DecoratedCarousel extends Carousel2 {
    constructor(props){
        super(props);
        
        this.newStyles = {
            main:{
                width: props.width || "100%",
                height: props.height || "100%",
            },
            prevButton:{
                width:'5%',
                verticalAlign:'top',
                marginTop:'120px'
            },
            nextButton:{
                width:'5%',
                verticalAlign:'top',
                marginTop:'120px'
            },
            slideshow:{
                display:'inline-block',
                width:'90%',
                height:'100%'
            },
            pagination:{
                width:'100%',
                height:'8%'
            },
            pageDot:{
                height:'100%',
                display:'inline-block',
                margin:'-26px 10px 0 10px',
                fontSize: '60px',
                color:'white',
                textShadow:'0px 0px 3px black',
                verticalAlign:'top'
            }
        };
        
        for (var attrname in this.newStyles) { this.styles[attrname] = this.newStyles[attrname]; }
    }
    
    // _getDescription(){
    //     return this.props.slides[this.refs.Carousel.getCurrentSlide()].description;
    // }
    
    render(){
        this.styles.viewport.width="90%";
        this.styles.viewport.height="92%";
        this.styles.viewport.display="inline-block";
        
        // var dotArray = [];
        // for (var i=0; i<Math.ceil(this.props.slides.length/this.props.show); i++) {
        //     dotArray[i] = i*this.props.show;
        // }
        
        return  <div style={this.styles.main} id='decoratedCarousel'>
                    <PrevButton onClick={this.prevSlide.bind(this)} style={this.styles.prevButton} />
                     {super.render()}
                    <NextButton onClick={this.nextSlide.bind(this)} style={this.styles.nextButton} />
                    <div style={this.styles.pagination} id="pagination">
                    {this.slides.map(function(slideReference,i){
                        return <span key={i} onClick={function(){this.goTo(i)}.bind(this)} 
                                style={i==this.state.currentSlide   ? [this.styles.pageDot,{color:'red'}]   : this.styles.pageDot}>
                                    .
                                </span>;
                    }.bind(this))}
                    </div>
                </div>;
    }
    
}

export default Radium(DecoratedCarousel);