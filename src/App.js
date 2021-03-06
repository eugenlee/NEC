import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authAction';
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
import Unauthorized from './components/login/Unauthorized.js';
import TravelsCreate from './components/forms/TravelsCreate';
import GuidesCreate from './components/forms/GuidesCreate';
import GuidesEdit from './components/forms/GuidesEdit';
import TravelsEdit from './components/forms/TravelsEdit';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render () {
    return(
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <div className="App">

            <div className="container">
              <Navigation />
            </div>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route exact path="/travels" component={Travels}></Route>
              <ProtectedRoute path="/travels/create" component={TravelsCreate}></ProtectedRoute>
              <ProtectedRoute path="/travels/edit" component={TravelsEdit}></ProtectedRoute>
              <Route exact path="/guides" component={Guides}></Route>
              <ProtectedRoute path="/guides/create" component={GuidesCreate}></ProtectedRoute>
              <ProtectedRoute path="/guides/edit" component={GuidesEdit}></ProtectedRoute>
              <Route path="/services" component={Services}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/unauthorized" component={Unauthorized}></Route>
            <div className="container">
              <hr></hr>
              <Footer />
            </div>
            
          </div>
        </Router>
      </Provider>
    )};
}

export default App;
