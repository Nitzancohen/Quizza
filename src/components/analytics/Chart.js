import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
// import apiUtils from '../../utils/apiUtils';
import MyLoader from '../General/MyLoader';
import PieCharts from './charts/PieCharts';
import { observable } from 'mobx';

@inject('store')
@observer
class Chart extends Component {
    @observable data = [];
    @observable loaded = false;

    getData = async () => {
        // const url = `${apiUtils.SERVER_URL}${apiUtils.ANALYTICS_BASE}${this.props.url}`;
        // const data = await apiUtils.getData(url);
        // this.data = data;
        // this.loaded = true;
    };

    componentDidMount = () => {
        this.getData();
    };

    // *
    // * Generate different charts according to chartType prop
    // *
    getChart = () => {
        let chart = null;
        switch (this.props.chartType) {
            case 'pie':
                chart = (<PieCharts
                    data={this.data}
                    pieDataKey={this.props.pieDataKey}
                    pieNameKey={this.props.pieNameKey}
                    colors={this.props.colors}
                />);
                break;
            default:
                console.error('Invalid chartType prop');
        }
        return chart;
    };


    render() {
        return (
            <MyLoader loaded={this.loaded} wrapperClass="chart-item">
                <p> {this.props.title} </p>
                {this.getChart()}
            </MyLoader>
        );
    }
}

export default Chart;