import React from "react";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // variables
  const title = props.title;
  const amount = props.amount;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const deleteItemHandler = () => {
    props.onDeleteItem(props);
  };

  return (
    <div className="container ">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-2 date-card bg-dark">
              <div className="month">{month}</div>
              <div>{year}</div>
              <div className="day">{day}</div>
            </div>

            <div className="col-10 display-flex">
              <h2>{title}</h2>
              <div>
                <small className="text-center">Amount</small>
                <h3>${amount}</h3>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={deleteItemHandler}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
