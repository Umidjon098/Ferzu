import React, { Component } from 'react';
import { Line } from "react-chartjs-2";
import SetId_Chart from './selector'

class LineChart extends Component {
    state = {
        setDate: [],
        setQuantity: [],
    }

    componentDidMount() {
        this.setLabel();
        this.setDataChart();
    }

    setLabel = () => {
        const { data } = this.props;
        const createdDate = [];
        data.forEach(date => {
            createdDate.push(date.created_date.slice(5, 10))
        });
        this.setState({ setDate: createdDate })
    }
    setDataChart = () => {
        const { data } = this.props;
        const quantity = [];
        data.forEach(date => {
            quantity.push(date.quantity)
        });
        this.setState({ setQuantity: quantity })
    }
    render() {
        const { data } = this.props;
        const { setDate, setQuantity } = this.state;
        if (data) {
            return (
                <div className="chart-box">
                    <SetId_Chart data={data} />
                    <Line
                        data={{
                            labels: setDate,
                            datasets: [
                                {
                                    label: '# of votes',
                                    data: setQuantity,
                                    backgroundColor: [
                                        'transparent'
                                    ],
                                    borderColor: [
                                        ' #00B533'
                                    ],
                                    borderWidth: 1
                                },
                            ],
                        }}
                    />
                </div>
            )
        }
    }
}

export default LineChart;






