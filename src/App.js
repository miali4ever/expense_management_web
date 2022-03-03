import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const static_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(static_expenses);

  const addExpenseHandler = (singleExpense) => {
    // console.log("In App.js");
    // console.log(singleExpense);
    // expenses.push(singleExpense);
    setExpense((prevExpenses) => {
      return [singleExpense, ...prevExpenses];
    });
  };

  console.log(expenses);

  return (
    <div>
      <NewExpense onAddExpence={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
