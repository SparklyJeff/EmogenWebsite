import Emoji from './Emoji';
import './Heading.css'

function Heading(props){
    return(
    <div className="pageHeader" id="header">
        <a className="logo" href="/">
        Emogen<Emoji symbol="😛"></Emoji>
        </a>
        <a className="nav-link" href="/contact">
            Contact 
        </a>
        <a className="nav-link" href="/">
            Home
        </a>
    </div>
    );
}
export default Heading;