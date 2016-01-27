import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, History, IndexRoute } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './containers/LandingPage';
import About from './containers/About';
import Blog from './containers/Blog';
import Portfolio from './containers/Portfolio';

class Application extends React.Component {
  	render(){
	    return  <div>
	              <Header />
	              {this.props.children}
	              <Footer />
	            </div>;
  	};
}

class NewPost extends React.Component {
  	render(){
	    return  <form method="POST" action="/posts">
                <input type="text" placeholder='title' name="title" />
                <input type="text" placeholder='Post Body' name="body" />
                <input type="text" placeholder='Name' name="first_name" />

                <button id='btn' type='submit' value='Submit' />
              </form>;
  	};
}

class UpdatePost extends React.Component {
    render(){
      return  <form method="PUT" action="/posts/:id">
                <input type="text" placeholder='ID to replace' name="id" />
                <input type="text" placeholder='title' name="title" />
                <input type="text" placeholder='Post Body' name="body" />
                <input type="text" placeholder='Name' name="first_name" />

                <button id='btn' type='submit' value='Submit' />
              </form>;
    };
}
  
ReactDOM.render((
  <Router>
    <Route path="/" component={Application}>
      <IndexRoute component={LandingPage}/>
      <Route path="about" component={About}/>
      <Route path="blog" component={Blog}/>
      <Route path="portfolio" component={Portfolio}/>
    	<Route path="newpost" component={NewPost}/>
      <Route path="updatepost" component={UpdatePost}/>
    </Route>
  </Router>
), document.getElementById('app'));