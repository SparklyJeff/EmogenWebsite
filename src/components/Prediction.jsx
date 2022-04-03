import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Emoji from "./Emoji.jsx";
import "./Prediction.css"
import History from "./History.jsx"

function Prediction(props){

    let emojiList = [
        {
            "label" : "🐑",
            "score" : 0.0
        },
        {
            "label" : "🐑",
            "score" : 0.0
        },
        {
            "label" : "🐑",
            "score" : 0.0
        }
    ]

    var maxThreshold = 0

    function arrayInsert(newEmoji, newWeight){
        for (var j = 0; j < 3; j++){
            if (newWeight > emojiList[j].score){
                var temp = emojiList[j].label
                var tempWeight = emojiList[j].weight
                emojiList[j].label = newEmoji
                newEmoji = temp
                emojiList[j].score = newWeight
                newWeight = tempWeight
            }
        }
    }

    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/junren/Emogen",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    query({"inputs": props.userInput}).then((response) => {
        for (var i = 0; i < response[0].length; i++){
            if (response[0][i].score > maxThreshold){
                maxThreshold = emojiList[2].score;
                arrayInsert(response[0][i].label, response[0][i].score)
            }
        }

        ReactDOM.render(
            <div>
                <br/>
                <div className="confidenceBar"> 
                    <h3>
                        Prediction Weights:
                    </h3>
                    <p>
                        <Emoji symbol={emojiList[0].label}></Emoji> : {(emojiList[0].score * 100).toFixed(2)}
                    </p>
                    <p>
                        <Emoji symbol={emojiList[1].label}></Emoji> : {(emojiList[1].score * 100).toFixed(2)}
                    </p>
                    <p>
                        <Emoji symbol={emojiList[2].label}></Emoji> : {(emojiList[2].score * 100).toFixed(2)}
                    </p>
                </div>
                <div className="topEmoji">
                    <Emoji symbol={emojiList[0].label}>
                    </Emoji>
                </div>
                <div className="historyBar">
                    <h3>
                        History:
                    </h3>
                    <History input={props.userInput} emojiprediction={emojiList[0].label}/>
                </div>
            </div>, document.getElementById("emojiSpot")
        );
    });
    maxThreshold = 0

    return(
        <div id="emojiSpot">

        </div>
    );
}

export default Prediction;