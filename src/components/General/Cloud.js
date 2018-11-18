import React, { Component } from 'react';
import WordCloud from 'wordcloud';
import './Cloud.css';

class Cloud extends Component {

    db = [
        {"word": "sad", "size":4},
        {"word": "happy", "size":5},
        {"word": "beautiful", "size":6},
        {"word": "day", "size":7},
        {"word": "strong", "size":8},
        {"word": "lovely", "size":8},
        {"word": "inspired", "size":7},
        {"word": "believe", "size":6},
        {"word": "confidence", "size":5},
        {"word": "success", "size":4},
        {"word": "dream", "size":4},
        {"word": "do it", "size":5},
        {"word": "hard work", "size":6},
        {"word": "journey", "size":7},
        {"word": "forward", "size":8},
        {"word": "future", "size":8},
        {"word": "world", "size":7},
        {"word": "no limits", "size":6},
        {"word": "greater", "size":5},
    ]

    list = [];

    componentDidMount() {
        for (let i in this.db) {
            this.list.push([this.db[i]["word"], this.db[i]["size"]])
        }
        WordCloud.miniumFontSize = '50px'
        WordCloud(this.refs['my-canvas'],
        {
            list: this.list,
            weightFactor: 5,
            fontFamily: 'Times, serif',
            rotationSteps: 2,
            backgroundColor: '#ffe0e0',
            wait: 350,
        })
    }

    render() {
        return (
            <div>
                <canvas className="cloud" ref="my-canvas"></canvas>
            </div>
        )
    }
}

export default Cloud;