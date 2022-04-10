import React from 'react';
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

    var sideBarWidth = "25%"
    var topEmojiWidth = "50%"
    var confidenceSlot = "1"
    var topEmojiSlot = "2"
    var newSize = "2rem"
    if (window.innerWidth < 600){
        sideBarWidth = "50%"
        topEmojiWidth = "100%"
        topEmojiSlot = "1"
        confidenceSlot = "2"
        newSize = "1.5rem"
    }


    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('./clouds', false, /\.(png|jpe?g|svg)$/));
    

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
        console.log("new render")
        ReactDOM.render(
                <div className="confidenceBar" style={{width : sideBarWidth, fontSize : newSize}}> 
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
                </div>, document.getElementById("slot" + confidenceSlot)
        );
        ReactDOM.render(
                <div className="topEmoji" style={{width : topEmojiWidth}}>
                    <Emoji symbol={emojiList[0].label}>
                    </Emoji>
                    <img className="wordCloud" src={images[emojiList[0].label + ".png"]} alt="wordCloud"/>
                </div>, document.getElementById("slot" + topEmojiSlot)
        );
        ReactDOM.render(
                <div className="historyBar" style={{width : sideBarWidth, fontSize : newSize}}>
                    <h3 className="historyTitle">
                        History:
                    </h3>
                    <History input={props.userInput} emojiprediction={emojiList[0].label}/>
                </div>, document.getElementById("slot3")
        );
    });
    maxThreshold = 0


    return(
        <div>
            <br/>
            <div id="slot1">

            </div>
            <div id="slot2">

            </div>
            <div id="slot3">

            </div>
        </div>
    );
}

export default Prediction;