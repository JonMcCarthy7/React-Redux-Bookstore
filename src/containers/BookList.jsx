import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchBooks, addToCart } from "../store/actions/bookActions";
import Book from "../components/Book";

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let filteredList = this.props.books.filter(book =>
      book.title.includes(this.props.word)
    );
    const bookList = filteredList.map(book => (
      <Book key={book.id} book={book} addToCart={this.props.addToCart} />
    ));

    return (
      <div className="card col-md-6">
        <div className="card-body">
          <ul>{this.props.books && bookList}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ books, word }) => {
  return {
    books,
    word
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchBooks, addToCart }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
