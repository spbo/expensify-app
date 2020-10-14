import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
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
