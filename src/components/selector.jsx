import React, { Component } from 'react';

class SetId_Chart extends Component {
    state = {
        start_date: "",
        end_date: "",
        products: [],
        product: 0
    }
    componentDidMount() {
        var date = new Date();
        var last = new Date(date.getTime() - (7 * 24 * 60 * 60 * 1000));
        var day = last.getDate();
        var month = last.getMonth() + 1;
        var year = last.getFullYear();
        var time = new Date(date.getTime())
        var today = time.getDate();
        var this_month = time.getMonth() + 1;
        var this_year = time.getFullYear();

        let start_date = `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day : `0${day}`}`
        let end_date = `${this_year}-${this_month > 9 ? this_month : `0${this_month}`}-${today > 9 ? today : `0${today}`}`
        this.setState({
            start_date: start_date,
            end_date: end_date
        })

    }
    containsObject = (obj, list) => {

        var i;
        if (list.length > 0) {
            for (i = 0; i < list.length; i++) {
                if (list[i].id === obj.id) {
                    return true;
                }
            }
            return false;
        } else {
            return false
        }
    }
    handleChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        )
    }
    render() {
        let data = this.props.data
        let products = []

        if (data.length !== 0) {
            data.forEach(order => {
                if (this.containsObject(order.product, products) === false) {
                    products = [...products, order.product]
                }
            });
        }

        return (<div className="chart-header">
            <div className="title">
                <span>Sotilish <br /> harakteristikasi</span>
            </div>
            <div className="main-section">
                <div className="input-box">
                    <input className="form-control" type="date" name="start_date" placeholder="...dan" value={this.state.starte_date} onChange={this.handleChange} />
                    <input className="form-control" type="date" name="end_date" placeholder="...gacha" value={this.state.end_date} onChange={this.handleChange} />
                </div>
                <div className="selector">
                    <select name="product" value={this.state.product} onChange={this.handleChange} className="custom-select">
                        {
                            products.map(product => {
                                return (
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>);
    }
}

export default SetId_Chart;
