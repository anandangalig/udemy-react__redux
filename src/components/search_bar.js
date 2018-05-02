import React, { Component } from 'react';
// ===================== Functional Component: no state awareness
// const SearchBar = () => {
//   return <input />; // this will tunr into React.creatComponent , so we had to import React above
// };

// ===================== Class Bases Component: state awareness + additional functionalities
class SearchBar extends Component{
  constructor(props){ // the only automatically called method of a class that gets called with each instantiation of the class
    super(props); // super method talks to the parent class, in this case its Component

    this.state = { term: '' }; // here, we are creting an empty object and assigning it to the state.
    //STATE: a plain JS object that records and reacts to user events!
    // All class based components come with the STATE => re-renders iteself and its' children when state changes
  }

  render() {
    // onChange is a protected React prop; Adding the event listener
    // this line can be shortened using arrow function: onInputChange() can be deleted
    // return <input onChange={event => console.log(event.target.value)} />;
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value })} />
        Value input: {this.state.term}
      </div>
    );
  }
}
export default SearchBar; // whenever other components import this silo-ed file/component, it will have get this
