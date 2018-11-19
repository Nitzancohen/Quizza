import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';
import axios from 'axios';
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
        let quizID = this.props.store.quiz._id;
        let users = await axios.get('http://localhost:8080/user/quizzes/' + quizID)
        this.data = this.sortResults(users.data);
        this.loaded = true;
    };

    sortResults = (users) => {
        
    }

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