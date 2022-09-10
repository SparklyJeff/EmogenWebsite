import './Loading.css'
import Emoji from './Emoji';
import spinner from './spinning-loading.gif'

function Loading(props){
    return(
        <div className = 'loadingHeader'>
            <h1 id = 'loadingText'> 
            Loading Prediction Model... 
            <Emoji symbol='😴'></Emoji> 
            </h1>
            <img id = 'spinLogo' src = {spinner} alt = "..."/>
            <p>
                Welcome to Emogen! <Emoji symbol='😊'></Emoji> 
            </p>
            <p>
                Enter anything and our website will automatically generate a matching emoji! <Emoji symbol='🤔'></Emoji> 
            </p>
        </div>
    ); 
};

export default Loading;