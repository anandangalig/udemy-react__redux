import React, { Component } from 'react';
// ===================== Functional Component: no state awareness
// const SearchBar = () => {
//   return <input />; // this will turn into React.creatComponent , so we had to import React above
// };

// ===================== Class Bases Component: state awareness + additional functionalities
class SearchBar extends Component{
  constructor(props){ // the only automatically called method of a class that gets called with each instantiation of the class
    super(props); // super method talks to the parent class, in this case its Component

    this.state = { term: '' };
    // here, we are creating an empty object and assigning it to the state.
    // STATE: a plain JS object that records and reacts to user events!
    // All class based components come with the STATE => re-renders itself and its' children when state changes
  }

  render() {
    // onChange is a protected React prop; Adding the event listener
    // this line can be shortened using ARROW function: onInputChange() can be deleted
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      // value declaration and setting to the state term is called the Controlled Componenent.
      // can be used to set initial values
      // the value of the input is changed only because of the event trigger: event forces the componenet to re-render, which in turn grabs the value and assigns it to the state.
      <div>
        <input
          value = {this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}
export default SearchBar; // whenever other components import this silo-ed file/component, it will have get this
