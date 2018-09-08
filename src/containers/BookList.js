import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

// The first argument is the state and it returns an object
// whatever object is returned will be available to our component as this props.

// Whenever the application state changes, this container will instantly re-render with the new list of books.
// Whenever the application state changes, the object in the state function will be assigned
// as props to the component.

function mapStateToProps(state) {
  return { books: state.books };
}

// Connect takes a function and a component and produces a container.

export default connect(mapStateToProps)(BookList);
