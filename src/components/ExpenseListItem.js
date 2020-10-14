import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

// ------convert to amount to euro ------
// load a locale
numeral.register('locale', 'gr', {
  delimiters: {
      thousands: ',',
      decimal: '.'
  },
  abbreviations: {
      thousand: 'k',
      million: 'm',
      billion: 'b',
      trillion: 't'
  },
  ordinal: function (number) {
      var b = number % 10;
      return (~~ (number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th';
  },
  currency: {
      symbol: '€'
  }
})
  
// switch between locales
numeral.locale('gr');
//--------------------------------------

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default ExpenseListItem;

// -------------------------------------------------------------------------------------

// import React from 'react';

// const ExpenseListItem = ({ description, amount, createdAt }) => (
//   <div>
//     <h3>{description}</h3>
//     <p>{amount} - {createdAt}</p>
//   </div>
// );
  
// export default ExpenseListItem;


//----Or you can write it as the below

// const ExpenseListItem = (props) => (
//   <div>
//     <h3>{props.expense.description}</h3>
//     <p>{props.expense.amount} - {props.expense.createdAt}</p>
//   </div>
// );

//---- but you have to change the ExpenseList.js

// {props.expenses.map((expense) => {
//   return <ExpenseListItem key={expense.id} expense={expense} />
// })
// }
