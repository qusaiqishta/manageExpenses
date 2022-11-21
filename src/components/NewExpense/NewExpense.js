import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from './ExpenseForm';
function NewExpense(props){
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };
    return(
        <div className='new-expense'>
     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickAddExpense={props.onClickAddExpense} />
        </div>
    )
}
export default NewExpense;