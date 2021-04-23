import React from 'react'
import LineChart from 'react-svg-line-chart'

const Dashboard = ({dataToLineChart}) =>{
    const coordinateData= dataToLineChart && dataToLineChart.map((el,i) => ({
        x:i,
        y:el
    }))
    return(
        <div>
        <p>Time(ms)</p>
        <LineChart
            data={coordinateData || []}
        />
        <p>Count</p>
        </div>
    )
}

export default Dashboard
