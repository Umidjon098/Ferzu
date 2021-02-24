import React from 'react';

export default function Datatable({ data }) {
    if (data) {
        return (
            <div className="table-box table-responsive">
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th scope="col">Agent</th>
                            <th scope="col">Product</th>
                            <th scope="col">Category</th>
                            <th scope="col">Provider</th>
                            <th scope="col">Status</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total  Price</th>
                            <th scope="col">Debt</th>
                            <th scope="col">Create Date</th>
                        </tr>
                    </thead>
                    {data.map(order => {
                        var splits = order.created_date.slice(0, 10);
                        return (
                            <tbody key={order.id}>
                                <tr>
                                    <td >{order.client.sale_agent.first_name + " " + order.client.sale_agent.last_name}</td>
                                    <td>{order.product.name}</td>
                                    <td>{order.product.category.name}</td>
                                    <td>{order.product.provider.name}</td>
                                    <td>{order.status}</td>
                                    <td>{order.quantity + " " + order.product.unit}</td>
                                    <td className="text-success">{order.price}</td>
                                    <td >{order.quantity * order.price}</td>
                                    <td className="text-danger">{order.debt}</td>
                                    <td>{splits}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        )
    }

}