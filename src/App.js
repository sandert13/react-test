import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import './Assets/css/default.min.css';
import Header from './Components/headerComponent/header';
import Footer from './Components/footerComponent/footer';
import Homepage from './Components/pages/homepage';
import Products from './Components/pages/products';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Products' component={Products} />
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
