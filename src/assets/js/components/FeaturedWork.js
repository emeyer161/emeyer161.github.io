import React from 'react';
import DecoratedCarousel from './Carousel/DecoratedCarousel';

let styles = {
    main:{
        padding:'2% 0',
        backgroundColor:'#201612',
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
        height:'350px',
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
                { id: 0, title: 'The Thirsty Terp', body: 'A college sports and news blog for the University of Maryland. This app is still a work in progress, and the content does not necessarily reflect my views.', src: './dist/img/tttLogo.png', 
                    tools:['Html', 'Css', 'Less', 'Javascript', 'React', 'Flux', 'PHP', 'Laravel', 'MySql'],
                    links:[
                        {name: 'Open', url:'http://thethirstyterp.com/', imgSrc: false},
                        {name: 'View Source', url: 'https://github.com/emeyer161/TheThirstyTerp', imgSrc:'./dist/img/contact/githubLogo.png'},
                    ]},
                { id: 1, title: 'The Riverstone Center', body: 'Marketing website for a small business massage studio. Html and styles implement the intended design of the business owner.', src: './dist/img/theRiverstoneCenter.png', 
                    tools:['Html', 'Css', 'Javascript', 'jQuery'],
                    links:[
                        {name: 'Open', url:'http://riverstonecenternj.com/', imgSrc: false},
                        {name: 'View Source', url: 'https://github.com/emeyer161/RiverStoneCenter', imgSrc:'./dist/img/contact/githubLogo.png'},
                    ]},
                { id: 2, title: 'Eric Meyer | Web Developer', body: 'Personal web development portfolio site, with mobile touch and responsiveness. All styles, responsiveness and components were developed by me.', src: './dist/img/ericMeyerLogo.png', 
                    tools:['Html', 'Css', 'Javascript', 'React'],
                    links:[
                        // {name: 'Open', url:'#', imgSrc: false},
                        {name: 'View Source', url: 'https://github.com/emeyer161/emeyer161.github.io', imgSrc:'./dist/img/contact/githubLogo.png'},
                    ]},
                { id: 3, title: 'Middle Cities', body: 'A quiz app testing knowledge of city population data.', src: './dist/img/middleCitiesLogo.png', 
                    tools:['Html', 'Css', 'Javascript', 'React'],
                    links:[
                        // {name: 'Open', url:'#', imgSrc: false},
                        {name: 'View Source', url: 'https://github.com/emeyer161/Middle_Cities', imgSrc:'./dist/img/contact/githubLogo.png'},
                    ]},
                { id: 4, title: 'Checkingtons Listables', body: 'A simple but functional shopping checklist app.', src: './dist/img/checkingtonsListablesLogo.png', 
                    tools:['Html', 'Css', 'Javascript', 'jQuery'],
                    links:[
                        // {name: 'Open', url:'#', imgSrc: false},
                        {name: 'View Source', url: 'https://github.com/emeyer161/Checkingtons_Listables', imgSrc:'./dist/img/contact/githubLogo.png'},
                    ]},
                { id: 5, title: '#Guess', body: 'A quiz app implementing the Instagram API.', src: './dist/img/guessLogo.png', 
                    tools:['Html', 'Css', 'Javascript', 'React', 'Flux'],
                    links:[
                        // {name: 'Open', url:'#', imgSrc: false},
                        {name: 'View Source', url: 'https://github.com/emeyer161/Instaguess', imgSrc:'./dist/img/contact/githubLogo.png'},
                    ]},
            ]
        };
    }

    render(){
        return  <div id="featuredWork" style={styles.main}>
                    <span id='featuredLink' style={styles.link}>&nbsp;</span>
                    <h1 style={styles.title}>Featured Projects</h1>
                    <DecoratedCarousel slides={this.state.slides} show={1} delay={3} pagination={true} buttons={true} displayInfo={this.props.large ? 'right' : 'below'} style={styles.carousel}  />
                </div>;
    };
}

export default FeaturedWork;