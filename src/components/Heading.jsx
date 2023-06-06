import Emoji from './Emoji';
import { HashLink } from 'react-router-hash-link';
import './Heading.css'

function Heading(props){
    return(
    <div className="pageHeader" id="header">
        <HashLink className="logo" smooth to="/#top">
        Emogen<Emoji symbol="😛"></Emoji>
        </HashLink>
        <HashLink className="nav-link" smooth to="/#Contact">
            Contact 
        </HashLink>
        <HashLink className="nav-link" smooth to="/#About">
            About 
        </HashLink>
        <HashLink className="nav-link" smooth to="/#top">
            Home
        </HashLink>
    </div>
    );
}
export default Heading;