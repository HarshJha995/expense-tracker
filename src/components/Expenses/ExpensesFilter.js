import { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__controls">
                <label>Filter by year</label>
                <select onChange={(e) => props.onChangeHandler(e.target.value)} value={props.selectedYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpensesFilter;