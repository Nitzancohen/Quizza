import React, { Component } from "react";

class Answers extends Component {

    render() {
        // hardcoded or from DB?
        return (
            <div className="answers">
                <div>
                    <input type="radio" name="answer" id="1" value="1" />
                    <label for="1">1</label>
                </div>
                <div>
                    <input type="radio" name="answer" id="2" value="2" />
                    <label for="2">2</label>
                </div>
                <div>
                    <input type="radio" name="answer" id="3" value="3" />
                    <label for="3">3</label>
                </div>
                <div>
                    <input type="radio" name="answer" value="4" />
                    <label for="4">4</label>
                </div>
            </div>
        )
    }
}

export default Answers;