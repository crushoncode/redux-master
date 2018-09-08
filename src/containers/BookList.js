import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

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
  // Whatever is returned will show up as props
  // inside of BookList

  return { books: state.books };
}

// Connect takes a function and a component and produces a container.

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about
// this new dispatch method, selectBook. Make it available as a prop.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
