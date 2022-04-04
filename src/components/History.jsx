import react, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Emoji from './Emoji';
import './History.css'

function History(props){
    if (sessionStorage.getItem(6)){
        for (var i = 0; i < 6; i++){
            sessionStorage.setItem(i, sessionStorage.getItem(i + 1))
        }
        sessionStorage.setItem(6, props.input + props.emojiprediction)
    }
    else{
        for (var i = 0; i < 7; i++){
            if (!sessionStorage.getItem(i)){
                sessionStorage.setItem(
                    i, 
                    props.input + props.emojiprediction
                )
                break
            }
        }
    }
    return(
        <div>
            <p>
                {sessionStorage.getItem(0)}
            </p>
            <p>
                {sessionStorage.getItem(1)}
            </p>
            <p>
                {sessionStorage.getItem(2)}
            </p>
            <p>
                {sessionStorage.getItem(3)}
            </p>
            <p>
                {sessionStorage.getItem(4)}
            </p>
            <p>
                {sessionStorage.getItem(5)}
            </p>
            <p>
                {sessionStorage.getItem(6)}
            </p>
        </div>
    );
}
export default History;