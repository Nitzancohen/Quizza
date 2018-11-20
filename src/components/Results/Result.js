import React, { Component } from 'react';
import Analytics from '../analytics/Analytics';
import '../../css/resultsForm.css'

class Result extends Component {
    
    resultReady = () => {
        let result = this.props.result();
        let tweet = '';

        let titleForTweet = result.title.replace(/<(?:.|\n)*?>/gm, '');
        let descForTweet = result.desc.replace(/<(?:.|\n)*?>/gm, '');

        tweet = titleForTweet.length + descForTweet.length <= 136 ?
            encodeURIComponent(titleForTweet + ' - ' + <br /> + descForTweet) :
            encodeURIComponent('"' + titleForTweet.substring(0, 133 - descForTweet.length) + '..." -' + descForTweet);
        if (titleForTweet && descForTweet) {
            return (
                <div>
                    <p className="left-align"> {titleForTweet} </p>
                    <p className="right-align"> {descForTweet} </p>
                    <a className='blue-grey darken-2 waves-effect waves-light btn twitter-share-button' target="_blank" rel="noopener noreferrer" href={"https://twitter.com/intent/tweet?text=" + tweet}> Tweet this Quote </a>
                </div>
            )
        }
    }

    render() {
        let result = this.props.result();
        return (
            <div>
                <h5>{result.title}</h5>
                <p>{result.desc}</p>
                {this.resultReady}
                <Analytics />
            </div >
        );
    }
}

export default Result;