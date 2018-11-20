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
    @observable data = null;
    @observable loaded = false;

    getData = async () => {
        let quizID = this.props.store.quiz._id;
        let users = await axios.get('/user/quizzes/' + quizID)
        this.sortResults(users.data);
        this.loaded = true;
    };

    sortResults = (users) => {
        this.data = [
            { name: '', value: 1 },
            { name: '', value: 1 },
            { name: '', value: 1 },
            { name: '', value: 1 }
        ]

        let results = this.props.store.quiz.results
        results.map((r, i) => this.data[i].name = r.title)

        for (let user of users) {
            let score = user.quizzes.filter(quiz => quiz.qID === this.props.store.quiz._id)[0].score
            this.data[score - 1].value++
        }
    }

    componentDidMount = () => {
        this.getData();
    };

    getChart = () => {
        switch (this.props.chartType) {
            case 'pie':
                return (
                    <PieCharts data={this.data} colors={this.props.colors} />
                );
            default:
                console.error('Invalid chartType prop');
        }
    };


    render() {
        return (
            <MyLoader loaded={this.loaded} wrapperClass="chart-item">
                <p> {this.props.title} </p>
                {this.data ? this.getChart() : null}
            </MyLoader>
        );
    }
}

export default Chart;