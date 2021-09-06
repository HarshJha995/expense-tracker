import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import './ExpensesFilter.css';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    let filteredExpense = props.items.filter(item => new Date(item.date).getFullYear().toString() === filteredYear);
    let notFound = {
        color: "white",
        textAlign: "center",
        marginTop: "0.5rem"
    }
    let expenseContent = <h3 style={notFound}>No Expenses Found!</h3>;
    if (filteredExpense.length) {
        expenseContent = filteredExpense.map(expenseItem =>
            <ExpenseItem key={expenseItem.id}
                title={expenseItem.title}
                amount={expenseItem.amount}
                date={expenseItem.date} />
        )
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onChangeHandler={filterChangeHandler} selectedYear={filteredYear} />
                <ExpenseChart expenses={filteredExpense} />
                {expenseContent}
            </Card>
        </div>
    );
}

export default Expenses;