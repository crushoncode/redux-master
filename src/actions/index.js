export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    // the type is always an upper case, usually is a string, and is always separated by kewords if it's multiple words.
    type: 'BOOK_SELECTED',
    payload: book
  };
}
