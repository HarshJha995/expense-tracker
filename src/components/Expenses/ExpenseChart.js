import Chart from "../Chart/Chart";

const ExpenseChart = props => {
    const chartDataPoints = [
        { Label: "Jan", value: 0 },
        { Label: "Feb", value: 0 },
        { Label: "Mar", value: 0 },
        { Label: "Apr", value: 0 },
        { Label: "May", value: 0 },
        { Label: "Jun", value: 0 },
        { Label: "Jul", value: 0 },
        { Label: "Aug", value: 0 },
        { Label: "Sep", value: 0 },
        { Label: "Oct", value: 0 },
        { Label: "Nov", value: 0 },
        { Label: "Dec", value: 0 }
    ]
    props.expenses.forEach(expense => {
        let expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    })
    return <Chart dataPoints={chartDataPoints} />
}

export default ExpenseChart;