import Expenses from "./components/Expenses";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const dummyExpense = [];

function App() {
  const [expenses, setExpenses] = useState(dummyExpense);

  const getNewExpenseHandler = (newExpense) => {
    setExpenses((oldExpense) => {
      return [newExpense, ...oldExpense];
    });
  };

  const deleteItemHandler = (item) => {
    const filteredItems = expenses.filter((expense) => item.id !== expense.id);

    setExpenses(filteredItems);

    console.log(expenses);
  };

  const clearAllHandler = () => {
    if (expenses.length > 0) {
      toast.success("All Expenses are Successfully Cleared!");
      setExpenses(dummyExpense);
    }
  };

  return (
    <div className="App">
      <Expenses
        expenses={expenses}
        onGetNewExpense={getNewExpenseHandler}
        onDelete={deleteItemHandler}
        onClear={clearAllHandler}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
