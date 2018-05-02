import React, {Component} from 'react';
// ===================== Functional Component: no state awareness
// const SearchBar = () => {
//   return <input />; // this will tunr into React.creatComponent , so we had to import React above
// };

// ===================== Class Bases Component: state awareness + additional functionalities
class SearchBar extends Component{
  render() {
    return <input onChange={this.onInputChange} />; // onChange is a protected React prop; Adding the event listener
    // this line can be shortened using arrow function: onInputChange() can be deleted
    // return <input onChange={event => console.log(event.target.value)} />;
  }

  //the event handling function:
  onInputChange(event){
    console.log(event.target.value);
  }
}
export default SearchBar; // whenever other components import this silo-ed file/component, it will have get this
