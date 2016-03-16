import React from 'react';
import Radium from 'radium';
import Carousel from './Carousel';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

class DecoratedCarousel extends Carousel {
    constructor(props){
        super(props);
        
        this.newStyles = {
            slideInfo:{
                width:'100%',
                height:'100%',
                display:'inline-block',
                verticalAlign:'top'
            },
            title:{
                fontFamily:'verdana',
                fontSize:'30px'
            },
            body:{
                fontFamily:'georgia',
                fontSize:'20px'
            },
            buttonDiv:{
                position:'relative',
                top:'-60%',
                height:'20%'
            },
            prevButton:{
                maxHeight:'100%',
                maxWidth:'4%',
                float:'left',
                marginLeft:'1%',
            },
            nextButton:{
                maxHeight:'100%',
                maxWidth:'4%',
                marginRight:'1%',
                float:'right',
            },
            pagination:{
                position:'relative',
                height:'5%',
                width:'100%',
                textAlign:'center',
                lineHeight:'100%',
            },
            pageDot:{
                display:'inline-block',
                margin:'0 10px',
                fontSize: '60px',
                color:'white',
                textShadow:'0px 0px 3px black'
            }
        };
        
        for (var attrname in this.newStyles) { this.styles[attrname] = this.newStyles[attrname]; }
    }

    _mouseOver(bool){
        if (this.props.delay){
            if (bool){
                clearInterval(this.incrementInterval);
            } else {
                this.incrementInterval = setInterval(function(){
                    this.nextSlide();
                }.bind(this),this.props.delay*1000);
            }
        }

        this.setState({
            mouseOver:bool
        });
    }

    render(){
        if(this.props.displayInfo && (this.props.displayInfo == "left" || this.props.displayInfo == "right")){
            this.styles.viewport.height = '100%';
            this.styles.viewport.width = '50%';
            this.styles.slideInfo.height = '100%';
            this.styles.slideInfo.width = '50%';
            this.styles.slideInfo.float = this.props.displayInfo;
            this.styles.slideInfo.textAlign = this.props.displayInfo == 'left' ? 'right' : 'left';
        }else if(this.props.displayInfo){
            this.styles.viewport.width = '100%';
            this.styles.viewport.height = '50%';
            this.styles.slideInfo.width = '80%';
            this.styles.slideInfo.height = '50%';
            this.styles.slideInfo.float = 'none';
            this.styles.slideInfo.textAlign = 'center';
        }else{
            this.styles.viewport.height = '100%';
            this.styles.viewport.width = '100%';
        };

        return  <div style={this.props.style} id='decoratedCarousel' onMouseOver={function(){this._mouseOver(true)}.bind(this)} onMouseLeave={function(){this._mouseOver(false)}.bind(this)}>
                    <div style={[ {height:'100%'}, this.props.pagination && {height:'95%'} ]}>
                        {super.render()}
                        
                        {this.props.displayInfo && <div style={this.styles.slideInfo} id="slideMeta">
                            <h1 style={this.styles.title}>{this.slides[this.state.currentSlide].title}</h1>
                            <p style={this.styles.body}>{this.slides[this.state.currentSlide].body}</p>
                        </div>}
                    </div>
                    
                    {(this.props.pagination) && <div style={[ this.styles.pagination, !this.state.mouseOver && {opacity:'0'} ]} id="pagination">
                        {this.slides.map(function(slideReference,i){
                            return <p key={i} onClick={function(){this.goTo(i)}.bind(this)} 
                                    style={[this.styles.pageDot, i==this.state.currentSlide ? {color:this.props.style.dotColor || 'red'} : null]}>
                                        &middot;
                                    </p>;
                        }.bind(this))}
                    </div> }

                    {(this.props.buttons && this.state.mouseOver) && <div style={this.styles.buttonDiv} id="buttons">
                        <PrevButton onClick={this.prevSlide.bind(this)} style={this.styles.prevButton} />
                        <NextButton onClick={this.nextSlide.bind(this)} style={this.styles.nextButton} />
                    </div>}

                </div>;
    }
    
}

export default Radium(DecoratedCarousel);