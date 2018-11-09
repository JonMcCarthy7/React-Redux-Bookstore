import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    let booksInCart = this.props.books
      .filter(book => book.inCart)
      .map(book => <CartItem key={book.id} book={book} />);
    return (
      <div className="card col-md-6">
        <h1>Books In Cart:</h1>
        <ul>{this.props.books && booksInCart}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books
});

export default connect(mapStateToProps)(Cart);
