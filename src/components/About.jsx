import './About.css'
import Emoji from './Emoji';
import Example from './example.png';

var segmentWidth = "50%"
if (window.innerWidth < 650){
    console.log("window width changed")
    segmentWidth = "100%"
}
else{
    segmentWidth = "50%"
}

function About(props){
    return(
        <div className = 'aboutHeader' id = 'About'>
            <h2>
                About Emogen <Emoji symbol='😊'></Emoji> 
            </h2>
            <h3>
                Input any sentence and Emogen will generate a matching emoji! <Emoji symbol='🤔'></Emoji> 
            </h3>
            <div className = 'segment' style={{width : segmentWidth}}>
                <h3>
                    Example Predictions:
                </h3>
                <p>
                    Emoji <Emoji symbol='😍'></Emoji>
                </p>
                <p>
                    Machine Learning is Cool! <Emoji symbol='😎'></Emoji>
                </p>
                <p>
                    Prediction <Emoji symbol='🧐'></Emoji>
                </p>
            </div>
            <div className = 'segment' style={{width : segmentWidth}}>
                <h3>
                    How it works:
                </h3>
                <p>
                    Emogen is trained using web-scraped emoji using data from Twitter. It uses that information to classify your texts to over 50 common emojis!
                </p>
            </div>
        </div>
    ); 
};

export default About;