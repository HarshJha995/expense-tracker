import "./Chart.css"
import ChartBar from './ChartBar';


const Chart = props => {
    const maxValue = props.dataPoints.map(dataPoint => dataPoint.value).reduce((sum, ele) => sum += ele, 0);
    console.log(props.dataPoints.map(dataPoint => dataPoint.value))
    return <div className="chart">
        {props.dataPoints.map(dataPoint => {
            return <ChartBar data={dataPoint.value} maxValue={maxValue} label={dataPoint.Label} key={dataPoint.Label} />
        })}
    </div>
}

export default Chart;