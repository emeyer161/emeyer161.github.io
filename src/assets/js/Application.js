import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedWork from './components/FeaturedWork';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default class Application extends React.Component {
    constructor(){
        super();
        this.state = {
            large: window.innerWidth > 850
        };
    }

    componentDidMount() {
        window.addEventListener("resize", function(){
            this.setState({
                large: window.innerWidth > 850
            })
        }.bind(this));
    }

  	render(){
	    return  <div>
                    <Header large={this.state.large} />
                    <Hero />
                    <Services />
                    <FeaturedWork large={this.state.large} />
                    <AboutMe />
                    <Contact large={this.state.large} />
                    <Footer />
	            </div>;
  	};
}
  
ReactDOM.render(<Application />, document.getElementById('app'));