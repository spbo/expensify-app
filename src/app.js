// import './utils.js';

// import ('./utils');

// import subtrack, { add, square } from './utils.js';

// console.log('app.js is running');
// console.log(square(10));
// console.log(add(1, 2));
// console.log(subtrack(1, 2));


// // install => import => use
// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

///////////////////////
// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//     this.getGreeting = this.getGreeting.bind(this);
//   }
//   getGreeting() {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());


// Below, with the class fields proposal we don't need to explicit the constructor and super,
// all arguments are passed down automatically.
// This is what allows an expression like state = {} to include references to this.props (or this.context if necessary).
// With Hooks, we don’t even have super or this. 
// https://github.com/tc39/proposal-class-fields

// class NewSyntax {
//   name = 'Jan';
//   getGreeting = () => {
//     return `Hi my name is ${this.name}`;
//   }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
///////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});