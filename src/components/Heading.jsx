import react, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Emoji from './Emoji';
import './Heading.css'
import Tongue from "./images/Tongue.png"

function Heading(props){
    return(
        <div className = "pageHeader" id="header">
            <h1 className = "pageTitle">
                Welcome to Emogen!
                <Emoji symbol="😛">
                </Emoji>
            </h1>
        </div>
    );
}
export default Heading;