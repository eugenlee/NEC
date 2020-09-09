import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProtectedRoute } from "./components/login/protected.route.js";
import './components/styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/layouts/Navigation';
import Footer from './components/layouts/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Travels from './components/pages/Travels';
import Guides from './components/pages/Guides';
import Services from './components/pages/Services';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/login/Login';
import FormBar from './components/login/FormBar.js';
import Unauthorized from './components/login/Unauthorized.js';


class App extends Component {
  render () {
    return(
      <Router>
        <ScrollToTop />
        <div className="App">

          <div className="container">
            <Navigation />
          </div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/travels" component={Travels}></Route>
            <Route path="/guides" component={Guides}></Route>
            <Route path="/services" component={Services}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/unauthorized" component={Unauthorized}></Route>
            <ProtectedRoute path="/forms" component={FormBar}></ProtectedRoute>
          <div className="container">
            <hr></hr>
            <Footer />
          </div>
          
        </div>
      </Router>
    )};
}

export default App;
