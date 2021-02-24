import React, { useState, useEffect } from 'react';
import Datatable from "./data-table";
import LineChart from './line-chart';
import BarChart from './bar-chart';
import PieChart from './pie';
require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Main() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        fetch('https://ferzu-warehouse.herokuapp.com/api/order/sell-order-list/').then((response) => response.json()).then((json) => setData(json.buy_order_list));
    }, []);

    function search(rows) {
        return rows.filter(row =>
            row.client.sale_agent.first_name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            row.client.sale_agent.last_name.toLowerCase().indexOf(query) > -1 ||
            row.product.name.toLowerCase().indexOf(query) > -1 ||
            row.product.category.name.toLowerCase().indexOf(query) > -1 ||
            row.product.provider.name.toLowerCase().indexOf(query) > -1 ||
            row.status.toLowerCase().indexOf(query) > -1
        )
    }
    if (data) {
        console.log(data)
        return (
            <div>
                <div>
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <i className="fas fa-search" aria-hidden="true"></i>
                    </div></div>
                <div>
                    <Datatable data={search(data)} />
                    <div className="charts-box">
                        <div className="chart-box-item">
                            <LineChart data={data} />
                            <PieChart data={data} />
                        </div>
                        <div className="chart-box-item">
                            <BarChart data={data} />
                            <PieChart data={data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <h1>Loadeing...</h1>
        )
    }
}