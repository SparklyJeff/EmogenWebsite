import {useState} from 'react'
import ReactDOM from 'react-dom';
import Prediction from './components/Prediction.jsx'
import Heading from './components/Heading.jsx'
import './App.css';
import Footer from './components/Footer.jsx';

function App() {
  const [userText, setUserText] = useState("");

  // function handleUserText(event){
  //   setUserText(event.target.value)
  // }

  
  function handleSubmit(event){
    event.preventDefault()
    ReactDOM.render(
      <div> 
      <Prediction userInput={userText}></Prediction>
      </div>, document.getElementById("predictionBox")
    );
    setUserText("")
  }

  return(
    <div className="body">
      <Heading/>
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
        <Footer/>
      </div>
  );
}

export default App;
