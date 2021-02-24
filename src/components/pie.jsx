import React, { Component } from 'react';
import { Pie } from "react-chartjs-2";

class PieChart extends Component {
    state = {
        setName: [],
        setTotalPrice: [],
    }

    componentDidMount() {
        this.setLabel();
        this.setDataChart();
    }

    setLabel = () => {
        const { data } = this.props;
        const productName = [];
        data.forEach(data => {
            productName.push(data.product.name)
        });
        this.setState({ setName: productName })
    }
    setDataChart = () => {
        const { data } = this.props;
        const totalPrice = [];
        data.forEach(total => {
            totalPrice.push(total.quantity * total.price)
        });
        this.setState({ setTotalPrice: totalPrice })
    }
    render() {
        const { data } = this.props;
        const { setName, setTotalPrice } = this.state;
        if (data) {
            return (
                <div className="chart-box">
                    <Pie
                        data={{
                            labels: setName,
                            datasets: [
                                {
                                    label: '# of vote',
                                    data: setTotalPrice,
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

export default PieChart;






