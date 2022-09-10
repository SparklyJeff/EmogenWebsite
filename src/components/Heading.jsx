import Emoji from './Emoji';
import './Heading.css'

function Heading(props){
    return(
        <div className = "pageHeader" id="header">
            <h1 className = "pageTitle">
                Emogen
                <Emoji symbol="😛">
                </Emoji>
            </h1>
            <p>
                Enter anything and our website will automatically generate a matching emoji! <Emoji symbol='🤔'></Emoji> 
            </p>
        </div>
    );
}
export default Heading;