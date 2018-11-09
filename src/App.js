import React, { Component } from "react";
import BookList from "./containers/BookList";
import SearchBar from "./containers/SearchBar";
import Cart from "./components/Cart";
class App extends Component {
  render() {
    return (
      <div className="App container">
        <br />
        <SearchBar />
        <div className="row">
          <BookList />
          <Cart />
        </div>
      </div>
    );
  }
}

export default App;
