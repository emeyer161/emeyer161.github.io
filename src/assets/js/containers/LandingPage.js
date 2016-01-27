import React from 'react';

import Hero from '../components/Hero';
import Services from '../components/Services';
import FeaturedWork from '../components/FeaturedWork';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';


class LandingPage extends React.Component {
  render(){
    return  <section id='mainContent'>
              <Hero />
              <Services />
              <FeaturedWork />
              <AboutMe />
              <Contact />
            </section>;
  };
}

export default LandingPage;