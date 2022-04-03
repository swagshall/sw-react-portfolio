import React from 'react';
import Intro from './components/Intro';
import About from './components/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
 const App =() => {
  return (
    <div className="App">
    <Router>
      <Header />
      <Switch>
      {/* <Route
                exact
                path="/"
                render={() => {
                    return (
                      <Redirect to="/home" /> 
                    )
                }}
              /> */}
        <Route exact path="/Intro" component={Intro} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={ProductList} />
        {/* <Redirect to='/Intro' /> */}
      </Switch>
      <Footer />

      {/* <Intro />
      <About />
      <ProductList />
      <Contact /> */}
    </Router>
  </div>
  );
};

      export default  App;

