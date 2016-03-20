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
                position:'relative',
                boxSizing:'border-box',
                width:'100%',
                height:'100%',
                padding:'0 2.5%',
                display:'inline-block',
                verticalAlign:'top',
            },
                title:{
                    fontFamily:'verdana',
                    margin:'.3rem 0',
                    fontSize:'1.4rem',
                },
                body:{
                    fontFamily:'georgia',
                    lineHeight:'1.5',
                    fontSize:'1.1rem',
                    margin:'0'
                },
                hr:{
                    opacity:'.7',
                    margin:'.1rem 2%',
                },
                linkContainer:{
                    display:'block',
                    marginTop:'.3rem'
                },
                    button:{
                        zIndex:'2',
                        position:'relative',
                        marginRight:'.5rem',
                        display:'inline-block',
                        boxSizing:'border-box',
                        // height:'30px',
                        padding:'4px',
                        borderRadius:'5px',
                        fontSize: '.9rem',
                        fontWeight: '500',
                        textAlign:'left',
                        backgroundColor:'#ad806c',
                        border:'1px solid rgba(255, 255, 255, 0)',
                        color:'white',
                        ':hover': {
                            border:'1px solid white',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)'
                        }
                    },
                    text:{
                        display:'inline-block',
                        verticalAlign:'middle'
                    },
                    icon:{
                        display:'inline-block',
                        height:'.9rem',
                        marginRight:'.3rem',
                        verticalAlign:'middle'
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
                    zIndex:'1',
                    position:'relative',
                    display:'inline-block',
                    margin:'0 10px',
                    fontSize: '3rem',
                    color:'white',
                    textShadow:'0px 0px 3px black'
                }
        };
        
        for (var attrname in this.newStyles) { this.styles[attrname] = this.newStyles[attrname]; }
    }

    componentDidMount(){
        this.props.delay && this.setSlideInterval();
        this.state.touchEnabled && this.initiateTouchHandlers();
    }

    componentWillUnmount(){
        this.incrementInterval && this.clearSlideInterval();
    }

    _mouseOver(bool){
        this.props.delay && (bool
                ? this.clearSlideInterval()
                : this.setSlideInterval())

        this.setState({
            mouseOver: bool
        });
    }

    initiateTouchHandlers(){
        this.touchsurface = document.getElementById('decoratedCarousel'),
        this.startX, this.startY, this.distX,
        this.threshold = 100, //required min distance traveled to be considered swipe
        this.startTime,
        this.allowedTime = 600, // maximum time allowed to travel that distance
        this._handleSwipe = function(direction){
            if (direction == "left"){
                this.nextSlide();
            }
            if (direction == "right"){
                this.prevSlide();
            }
        }

        this.touchsurface.addEventListener('touchstart', function(e){
            this._mouseOver(true);
            this.startObj = e.changedTouches[0];
            this.startX = this.startObj.pageX;
            this.startY = this.startObj.pageY;
            this.startTime = new Date().getTime(); // record time when finger first makes contact with surface
        }.bind(this), false)
     
        this.touchsurface.addEventListener('touchend', function(e){
            this._mouseOver(false);
            this.endObj = e.changedTouches[0];
            if ((new Date().getTime() - this.startTime <= this.allowedTime) &&  // check that elapsed time is within allowed
                (Math.abs(this.endObj.pageX - this.startX) >= this.threshold) &&    // check that swipe distance was long enough
                (Math.abs(this.endObj.pageY - this.startY) <= 50)) {     // check that Y distance was minimal
                    this.endObj.pageX - this.startX > 0       // calculate swipe direction
                        ? this._handleSwipe('right')
                        : this._handleSwipe('left')
            }
        }.bind(this), false)

    }

    render(){
        if(this.props.displayInfo && (this.props.displayInfo == "left" || this.props.displayInfo == "right")){
            this.styles.viewport.width = '50%';
            this.styles.viewport.height = '100%';
            this.styles.slideInfo.width = '50%';
            this.styles.slideInfo.height = '100%';
            this.styles.slideInfo.float = this.props.displayInfo;
            this.styles.slideInfo.textAlign = this.props.displayInfo == 'left' ? 'right' : 'left';
        }else if(this.props.displayInfo){
            this.styles.viewport.width = '100%';
            this.styles.viewport.height = '50%';
            this.styles.slideInfo.width = '100%';
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
                            <p style={this.styles.body}>
                                {this.slides[this.state.currentSlide].body}
                            </p>
                            <hr style={this.styles.hr} />
                            <p style={[this.styles.body,{opacity:'.7'}]}>
                                {this.slides[this.state.currentSlide].tools.join(' | ')}
                            </p>
                            {this.slides[this.state.currentSlide].links && <div style={this.styles.linkContainer}>
                                {this.slides[this.state.currentSlide].links.map(function(link,i){
                                    return  <a key={this.slides[this.state.currentSlide].title,i} style={this.styles.button} href={link.url} target="_blank">
                                                {link.imgSrc && <img style={this.styles.icon} src={link.imgSrc} />}
                                                <span style={this.styles.text}>{link.name}</span>
                                            </a>
                                }.bind(this))}
                            </div>}
                        </div>}
                    </div>
                    
                    {(this.props.pagination) && <div style={[ this.styles.pagination, (!this.state.mouseOver && !this.state.touchEnabled) && {opacity:'0'} ]} id="pagination">
                        {this.slides.map(function(slideReference,i){
                            return <p key={i} onClick={function(){this.goTo(i)}.bind(this)} 
                                    style={[this.styles.pageDot, i==this.state.currentSlide ? {color:this.props.style.dotColor || 'red'} : null]}>
                                        &middot;
                                    </p>;
                        }.bind(this))}
                    </div> }

                    {(this.props.buttons && this.state.mouseOver && !this.state.touchEnabled) && <div style={this.styles.buttonDiv} id="buttons">
                        <PrevButton onClick={this.prevSlide.bind(this)} style={this.styles.prevButton} />
                        <NextButton onClick={this.nextSlide.bind(this)} style={this.styles.nextButton} />
                    </div>}

                </div>;
    }
    
}

export default Radium(DecoratedCarousel);