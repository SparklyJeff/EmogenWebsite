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
        </div>
    );
}
export default Heading;