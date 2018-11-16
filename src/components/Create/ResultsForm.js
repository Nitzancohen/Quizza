import React, { Component } from "react";

class ResultsForm extends Component {
    results = [];
    
    saveResults = () => {
        this.props.saveResults(this.results)
    }

    render() {
        return (
            <div className="results-form">
                <h4>Enter the final result types</h4>
                <div>
                    <div>1</div>
                    Title: <input type="text" placeholder="title" /> <br />
                    Description: <input type="text" placeholder="description" />
                </div>
                <div>
                    <div>2</div>
                    Title: <input type="text" placeholder="title" /> <br />
                    Description: <input type="text" placeholder="description" />
                </div>
                <div>
                    <div>3</div>
                    Title: <input type="text" placeholder="title" /> <br />
                    Description: <input type="text" placeholder="description" />
                </div>
                <div>
                    <div>4</div>
                    Title: <input type="text" placeholder="title" /> <br />
                    Description: <input type="text" placeholder="description" />
                </div>
                <input type="button" value="save results" onClick={this.saveResults} />
            </div>
        )
    }
}

export default ResultsForm;