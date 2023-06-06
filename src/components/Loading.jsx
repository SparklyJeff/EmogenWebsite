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
            <h3>
                Welcome to Emogen! <Emoji symbol='😊'></Emoji> 
            </h3>
            <h3>
                Enter anything and Emogen will generate a matching emoji! <Emoji symbol='🤔'></Emoji> 
            </h3>
        </div>
    ); 
};

export default Loading;