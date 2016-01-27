import React from 'react';
import Radium from 'radium';

let styles = {
    main:{
        padding:'50px 0 60px 0',
        backgroundColor:'rgba(173, 128, 108,.2)',
        textAlign:'center'
    },
    container:{
        position:'relative',
        display:'inline-block',
        width:'50%',
        '@media (max-width: 850px)': {
            width:'100%'
        },
        marginBottom:'40px',
        textAlign:'center'
    },
    containerTitle:{
        color:'#414142',
        fontSize:'30px',
        fontFamily:'verdana',
    },
    categoryBox:{
        display:'inline-block',
        width:'40%',
        margin: '0 5%',
        overflow:'hidden'
    },
    categoryInfo:{
        position:'absolute',
        height:'inherit',
        width:'inherit',
        textAlign:'center'
    },
    categoryTitle:{
        fontFamily:'verdana',
        color:'#414142',
        marginBottom:'10%'
    },
    img:{
        width:'100%'
    },
    imgDim:{
        opacity:'.1'
    },
    logo:{
        display:'inline-block',
        position:'relative',
        width:'42%',
        maxHeight:'10%',
        margin:'0 2% 12% 2%',
        textAlign:'center',
        verticalAlign:'top'
    }
};

class Skills extends React.Component {
    constructor(){
        super();
        this.state = {
            hoverPane: 0
        };
    };

    _mouseOver(value){
        console.log(value);
        this.setState({
            hoverPane: value
        });
    };

    render(){
        return  <div style={styles.main}>
                    
                    <div style={styles.container}>
                        <h1 style={styles.containerTitle}>User Facing</h1>
                        <div style={styles.categoryBox} onMouseOver={function(){this._mouseOver(1)}.bind(this)} onMouseLeave={function(){this._mouseOver(0)}.bind(this)}>
                            <div style={[this.state.hoverPane!=1 && {display:'none'}, styles.categoryInfo]}>
                                <h1 style={styles.categoryTitle}>Design & Style</h1>
                                <img src='./dist/img/devPipeline/logos/html.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/css.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/photoshop.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/sketch.png' style={styles.logo} />
                            </div>
                            <img src='./dist/img/devPipeline/design.png' style={[ this.state.hoverPane==1 && styles.imgDim, styles.img ]} key='1' />
                        </div>
                        
                        <div style={styles.categoryBox} onMouseOver={function(){this._mouseOver(2)}.bind(this)} onMouseLeave={function(){this._mouseOver(0)}.bind(this)}>
                            <div style={[this.state.hoverPane!=2 && {display:'none'}, styles.categoryInfo]}>
                                <h1 style={styles.categoryTitle}>Interactive UI</h1>
                                <img src='./dist/img/devPipeline/logos/javascript.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/jquery.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/react.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/flux.png' style={styles.logo} />
                            </div>
                            <img src='./dist/img/devPipeline/gears.png' style={[ this.state.hoverPane==2 && styles.imgDim, styles.img ]} key='2' />
                        </div>
                    </div>
                    
                    <div style={styles.container}>
                        <h1 style={styles.containerTitle}>Server Side</h1>
                        <div style={styles.categoryBox} onMouseOver={function(){this._mouseOver(3)}.bind(this)} onMouseLeave={function(){this._mouseOver(0)}.bind(this)}>
                            <div style={[this.state.hoverPane!=3 && {display:'none'}, styles.categoryInfo]}>
                                <h1 style={styles.categoryTitle}>Server Logic</h1>
                                <img src='./dist/img/devPipeline/logos/node.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/express.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/php.png' style={styles.logo} />
                                <img src='./dist/img/devPipeline/logos/laravel.png' style={styles.logo} />
                            </div>
                            <img src='./dist/img/devPipeline/server.png' style={[ this.state.hoverPane==3 && styles.imgDim, styles.img ]} key='3' />
                        </div>
                        
                        <div style={styles.categoryBox} onMouseOver={function(){this._mouseOver(4)}.bind(this)} onMouseLeave={function(){this._mouseOver(0)}.bind(this)}>
                            <div style={[this.state.hoverPane!=4 && {display:'none'}, styles.categoryInfo]}>
                                <h1 style={styles.categoryTitle}>Database Layer</h1>
                            </div>
                            <img src='./dist/img/devPipeline/db.png' style={[ this.state.hoverPane==4 && styles.imgDim, styles.img ]} key='4' />
                        </div>
                    </div>

                </div>;
    };
}

export default Radium(Skills);