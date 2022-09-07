import React from "react";
import "./ExpenseItem.css";
export default function ExpenseTracker(props) {
  const expenseDate = new Date();
  const expenseType = "Car Insurance";
  const price = "$294.67";

  return (
    <>
      <div className="expense-item">
        <div>{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{expenseType}</h2>
          <h2>{props.location}</h2>
          <div className="expense-item__price">{price}</div>
        </div>
      </div>
    </>
  );
}
