import React, { useState } from "react";
import { toast } from "react-toastify";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  let paragraph = title === "" || amount === "" || date === "";

  const submitFormHandler = (event) => {
    if (title === "" || amount === "" || date === "") {
      event.preventDefault();
      toast.error("Expense Should not be Empty!");

      return;
    }

    const expenses = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSubmitForm(expenses);

    setTitle("");
    setAmount("");
    setDate("");

    event.preventDefault();
  };

  return (
    <div className="container">
      <form onSubmit={submitFormHandler}>
        {paragraph && (
          <p className="text-center bg-danger text-white lead p-2">
            Fill All Fields To Add Expense
          </p>
        )}

        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                onChange={titleChangeHandler}
                value={title}
              ></input>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label>Amount</label>
              <input
                className="form-control"
                type="number"
                onChange={amountChangeHandler}
                value={amount}
              ></input>
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label>Date</label>
              <input
                className="form-control"
                type="date"
                onChange={dateChangeHandler}
                value={date}
              ></input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-outline-danger mb-3">
          Add Expense
        </button>
        <button
          type="button"
          className="btn btn-outline-danger mb-3 ml-2"
          onClick={props.onClearAll}
        >
          Clear All
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
