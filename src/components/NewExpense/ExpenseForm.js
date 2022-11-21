import React, { useState } from "react";
import styles from "./ExpenseForm.module.css";

function ExpenseForm(props) {
  const [showForm, setShowForm] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const showF = () => {
    setShowForm(!showForm);
  };
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const tileChangeHandler = (event) => {
    if(event.target.value.trim().length>0){
        setIsValid(true)
    }
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    if(event.target.value>0){
        setIsValid(true)
    }
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    if(event.target.value){
        setIsValid(true)
    }
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date),
    };
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });

    if (!Object.values(expenseDate).every((x) => x !== null && x !== "")) {
      setIsValid(false);
      return;
    }
    props.onSaveExpenseData(expenseDate);
    showF();
    props.onClickAddExpense()
  };
  return (
    <div>
      <button onClick={showF}>Add Expense</button>
      {showForm && (
        <form onSubmit={submitHandler}>
          <div className={`${styles['new-expense__controls']} ${!isValid&&styles.invalid}`}>
            <div className={styles['new-expense__control']}>
              <label>Title</label>
              <input
                type="text"
                value={userInput.title}
                onChange={tileChangeHandler}
                
              />
            </div>
            <div className={styles["new-expense__control"]}>
              <label>Amount</label>
              <input
                type="number"
                min="1"
                step="1"
                value={userInput.amount}
                onChange={amountChangeHandler}
                
              />
            </div>
            <div className={styles["new-expense__control"]}>
              <label>Date</label>
              <input
                type="date"
                min="1-1-2019"
                max="31-12-2022"
                value={userInput.date}
                onChange={dateChangeHandler}
               
              />
            </div>
            <div className={styles["new-expense__actions"]}>
              <button type="submit"> Add Expense</button>
              <button type="button" onClick={showF}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default ExpenseForm;
