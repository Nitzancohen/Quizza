import React, { Component } from 'react';
import { observer } from "mobx-react";
import { observable } from "mobx";
import WordCloud from 'wordcloud';

@observer
class Cloud extends Component {

    db = [];
    selectedCategories = [
        {"word":"Love","size":5},
        {"word":"Health","size":6},
        {"word":"Friendship","size":7},
        {"word":"food","size":8},
        {"word":"experience","size":9},
        {"word":"life","size":9},
        {"word":"travel","size":8},
        {"word":"sports","size":7},
        {"word":"romance","size":6},
        {"word":"funny","size":5},
        {"word":"fear","size":5},
        {"word":"respect","size":6},
        {"word":"money","size":7},
        {"word":"happiness","size":8},
        {"word":"business","size":9},
        {"word":"family","size":9},
        {"word":"future","size":8},
        {"word":"religion","size":7},
        {"word":"anger","size":6},
        {"word":"learning","size":5}
    ]

    @observable cloudCategories = [];
    @observable showCloud = true;

    componentDidMount() {
        fetch("https://talaikis.com/api/quotes/")
            .then(res => res.json())
            .then(json => {
                this.db = json;
        })
        
        const cat = this.selectedCategories
        for (let i in cat) {
            this.cloudCategories.push([cat[i]["word"], cat[i]["size"]])
        }
        WordCloud(this.refs['my-canvas'],
        {
            list: this.cloudCategories,
            weightFactor: 5,
            fontFamily: 'Times, serif',
            rotationSteps: 2,
            backgroundColor: '#ffe0e0',
        })
        setTimeout(() => {
            this.showCloud = false
        }, 3000);
    }

    render() {
        return (
            <div>
                { this.showCloud ? <canvas className="cloud" ref="my-canvas"></canvas> : null}
            </div>
        )
    }
}

export default Cloud;