import React from 'react';
import Intro from './components/Intro';
import About from './components/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact';

// Inside our App component, we have a return method that contains all the JSX we want to render to the screen.
// In this example, we have a parent `div` that references the Welcome component that we imported at the top.
export default function App() {
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}



