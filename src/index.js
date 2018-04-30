import React from 'react'; // this part is used to create ES5 from JSX/ES6: the components
import ReactDOM from 'react-dom'; // this part handles the rendering to DOM part!

// ================= Step 1: create component that creates some html

// this is JSX - a subset of JS that lets us write html within JS
// JSX is a preprocessor step that adds XML syntax to JavaScript.
// You can definitely use React without JSX but JSX makes React a lot more elegant.
// Just like XML, JSX tags have a tag name, attributes, and children.
// If an attribute value is enclosed in quotes, the value is a string.


const App = () => {
  // this component is the class we are definging here. Before passing it to the DOM, it needs to be instantiated as an element.
  // () => is ES6 for function(). It has diff this variables, and allows for cleaner components with multiple functions.
  return <div>hello!</div>;
}


// =================  Step 2: take the above created compnenet's HTML and place it in the DOM

ReactDOM.render(<App />, document.querySelector(".container"));
//<App /> is JSX for <App></App> as self closing. And when transpiled, it call React.createElement(App)
// the second argument is the target element from the DOM/document.


// Other notes:
// 1. Component division can be done in any way. There is no secret sauce.
// 2. Componenents can be nested!
// 3. The modularity of components based ont he functionality, is useful for re-using the same component.
// 4. 1 compnenet per FILE! No matter how small. 
