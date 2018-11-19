import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { ResponsiveContainer, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

@inject('store')
@observer
class PieCharts extends Component {
    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Tooltip />
                    <Legend />
                    <Pie
                        data={this.props.store.userResults}
                        dataKey={this.props.pieDataKey}
                        nameKey={this.props.pieNameKey}
                        label
                    >
                        {this.props.data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={this.props.colors[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}

export default PieCharts;