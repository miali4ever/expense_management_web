import React, { useState } from "react";

import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const [filteredYear, selectedFilteredYear] = useState("2022");

  const filteChangeHandler = (selectedYear) => {
    selectedFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filteChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />

        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expense;
