import ExpenseItem from "./ExpenseItem";

import ExpenseForm from "./ExpenseForm";

const Expenses = (props) => {
  const submitFormHandler = (expense) => {
    const newExpenses = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onGetNewExpense(newExpenses);
  };

  const deleteItemHandler = (item) => {
    props.onDelete(item);
  };

  const clearAllHandler = () => {
    props.onClear();
  };

  return (
    <div className="container my-5">
      <div className="card card-body">
        <h1 className="text-center ">Expense Tracker</h1>
        <ExpenseForm
          onSubmitForm={submitFormHandler}
          onClearAll={clearAllHandler}
        ></ExpenseForm>

        {props.expenses.length === 0 && (
          <h2 className="text-center">No Expenses Found</h2>
        )}
        {props.expenses.length > 0 &&
          props.expenses.map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
              id={expense.id}
              onDeleteItem={deleteItemHandler}
            ></ExpenseItem>
          ))}

        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />

        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />

        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />

        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        /> */}
      </div>
    </div>
  );
};

export default Expenses;
