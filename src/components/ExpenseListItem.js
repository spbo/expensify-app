import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import localData from '../locales/locales-gr-euros';

// ------convert the amount to euro ------
// load a locale
numeral.register('locale', 'gr', localData)
  
// switch between locales
numeral.locale('gr');
//--------------------------------------

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div className="list-item__header">
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
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
