import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [editable, setEditable] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const editFormHandler = () => {
        setEditable(true)
    }

    return (
        <div className='new-expense'>
            {editable ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeEditable={() => setEditable(false)} /> :
                <button onClick={editFormHandler}>Add New Expense</button>
            }

        </div>
    );
};

export default NewExpense;