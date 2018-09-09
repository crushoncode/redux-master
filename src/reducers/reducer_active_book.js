// State argument is not application state, only the state
// this reducer is responsible for

// default the value of the state argument to null.
// when this argument comes in if it's undefined, set it to null.

export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}
