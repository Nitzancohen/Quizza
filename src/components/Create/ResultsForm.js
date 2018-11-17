import React, { Component } from "react";

class ResultsForm extends Component {
    results = {title1: '', desc1:'', title2: '', desc2:'', title3: '', desc3:'', title4: '', desc4:'',}
    
    saveResults = () => {
        if ((this.results.title1 !== '')
            && (this.results.desc1 !== '')
            && (this.results.title2 !== '')
            && (this.results.desc2 !== '')
            && (this.results.title3 !== '')
            && (this.results.desc3 !== '')
            && (this.results.title4 !== '')
            && (this.results.desc4 !== '')){
                this.props.saveResults(this.results)
            } else alert("please create all the results!")
    }

    inputChange = (e)=> {
        this.results[e.target.name] = e.target.value
        console.log(this.results[e.target.name])  
    } 

    render() {
        return (
            <div className="results-form">
                <h4>Enter the final result types</h4>
                <div>
                    <div>1</div>
                    Title: <input type="text" name="title1" placeholder="title" onChange={this.inputChange} /> <br />
                    Description: <input type="text" name="desc1" placeholder="description" onChange={this.inputChange} />
                </div>
                <div>
                    <div>2</div>
                    Title: <input type="text" name="title2" placeholder="title" onChange={this.inputChange} /> <br />
                    Description: <input type="text" name="desc2" placeholder="description" onChange={this.inputChange} />
                </div>
                <div>
                    <div>3</div>
                    Title: <input type="text" name="title3" placeholder="title" onChange={this.inputChange} /> <br />
                    Description: <input type="text" name="desc3" placeholder="description" onChange={this.inputChange} />
                </div>
                <div>
                    <div>4</div>
                    Title: <input type="text" name="title4" placeholder="title" onChange={this.inputChange} /> <br />
                    Description: <input type="text" name="desc4" placeholder="description" onChange={this.inputChange} />
                </div>
                <input type="button" value="save results" onClick={this.saveResults} />
            </div>
        )
    }
}

export default ResultsForm;