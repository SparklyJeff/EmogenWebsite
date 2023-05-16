import {useState} from 'react'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Prediction from '../components/Prediction.jsx'
import Heading from '../components/Heading.jsx'
import './Home.css';
import Loading from '../components/Loading.jsx';

const Home = () => {
  const [userText, setUserText] = useState("");
  const [loaded, setLoaded] = useState(false)

  // function handleUserText(event){
  //   setUserText(event.target.value)
  // }
  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

  async function query(data){
    console.log("inside query")
    console.log(loaded)
    console.log(data)
    const response = await fetch(
      "https://api-inference.huggingface.co/models/junren/Emogen",
      {
          headers: { Authorization: "Bearer " + String(process.env.REACT_APP_HUGGING_FACE_TOKEN)},
          method: "POST",
          body: JSON.stringify(data),
      })
      console.log(response)
      const result = await response.json();
      return result
  };

  async function loadingFunc(data) {
    try{
    const result = await query(data)
    console.log(result)
    while (result.error === 'Model junren/Emogen is currently loading'){
        await delay(result.estimated_time * 1000)
        const result = await query(data)
    }
    setLoaded(true)
    }
    catch (e){
      console.log(e)
    }
};

useEffect(() => {
    if (!loaded){
        loadingFunc({'inputs' : makeid(6)})
    }
});

  
  function handleSubmit(event){
    event.preventDefault()
    ReactDOM.render(
      <div> 
      <Prediction userInput={userText}></Prediction>
      </div>, document.getElementById("predictionBox")
    );
    setUserText("")
  }
  var textHeight = "1rem"
  var widthSize = "30%"
  if(window.innerWidth < 600){
    textHeight = "2rem"
    widthSize = "70%"
  }


  return(
    <div className="body">
      <Heading/>
      { loaded ?
      (<div id="container"> 
          <form onSubmit={event => (handleSubmit(event))}>
            <label className="userPrompt">
              Enter Your Text: 
              <br/>
              <br/>
              <input className="inputBox" type="text" value={userText} onChange={(event) => setUserText(event.target.value)} placeholder="Type Something!" style={{fontSize : textHeight, width: widthSize}}/>
            </label>
            <input type="submit" value="Submit"/>
          </form>
          <div id="predictionBox">
          </div>
        </div>) : 
        ( 
          <Loading/>
        )
        }
      </div>
  );
}

export default Home;
