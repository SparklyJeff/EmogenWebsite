import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Emoji from "./Emoji.jsx";
import "./Prediction.css"

function Prediction(props){

    // const [emojiPrediction, setEmojiPrediction] = useState("🐑");

    var maxEmoji = "🐑"

    var maxWeight = 0

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
            if (response[0][i].score > maxWeight){
                maxWeight = response[0][i].score
                maxEmoji = response[0][i].label
            }
        }
        console.log(maxEmoji)
        console.log(response[0])
        ReactDOM.render(
            <div>
                <br/>
                <div className="topEmoji">
                    <Emoji symbol={maxEmoji}>
                    </Emoji>
                </div>
                <p>
                    Confidence: {maxWeight * 100}%
                </p>
            </div>, document.getElementById("emojiSpot")
        );
    });
    maxWeight = 0

    return(
        <div id="emojiSpot">

        </div>
    );
}

export default Prediction;