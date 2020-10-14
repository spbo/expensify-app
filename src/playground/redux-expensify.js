
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 5, createdAt: -1000 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// // if we do the below comment we have to change the Action to: ({id, update}) =>
// // store.dispatch(editExpense({ id: expenseTwo.expense.id, updates: { amount: 777 } }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 777 }));

store.dispatch(setTextFilter('re'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(1250));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

// ----- Demo State ----------------
const demoState = {
  expenses: [{
    id: 'asdf',
    description: 'January Rent',
    note: 'Aloha',
    amount: 55,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'ammount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
