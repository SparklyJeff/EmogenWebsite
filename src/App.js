import react, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prediction from './components/Prediction.jsx'
import Heading from './components/Heading.jsx'
import './App.css';

function App() {
  const [userText, setUserText] = useState("hello!");

  // function handleUserText(event){
  //   setUserText(event.target.value)
  // }

  
  function handleSubmit(event){
    console.log("prediction text:")
    console.log(userText)
    event.preventDefault()
    ReactDOM.render(
      <div> 
      <Prediction userInput={userText}></Prediction>
      </div>, document.getElementById("predictionBox")
    );
  }

  return(
    <div className="body">
      <Heading></Heading>
      <div id="container"> 
          <form onSubmit={event => (handleSubmit(event))}>
            <label className="userPrompt">
              Enter Your Text: 
              <br/>
              <br/>
              <input className="inputBox" type="text" value={userText} onChange={(event) => setUserText(event.target.value)} placeholder="Type Something!"/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <div id="predictionBox">
          </div>
        </div>
      </div>
  );
}

export default App;
