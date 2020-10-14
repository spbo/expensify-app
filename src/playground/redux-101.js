import { createStore } from 'redux';


//-------------Action generators - functions that return action objects-------------------
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// alternatively from above, we use the destructuring argument
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. are pure functions (meaning that the output is only determined by the input an
// depends only to input and also they don't change any output)
// 2. Never change state or action
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy };
    case 'DECREMENT':
      return { count: state.count - action.decrementBy };
    case 'SET':
      return { count: action.count };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const store = createStore(countReducer)

// the return value of subscribe is a function that we can use for unsubscribe.
// Just use wherever you want the "unsubscribe();"
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//---or without unsubscribe
//store.subscribe(() => {
//  console.log(store.getState());
//});
//---or for 1 time event
//console.log(store.getState());

// store.dispatch({ type: 'INCREMENT' });
store.dispatch(incrementCount());

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));

// store.dispatch({type: 'RESET'});
store.dispatch(resetCount());

// store.dispatch({ type: 'DECREMENT' });
store.dispatch(decrementCount());

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });
store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
store.dispatch(setCount({ count: 101 }));