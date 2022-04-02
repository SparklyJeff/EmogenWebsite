import react, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom';
import Emoji from './Emoji';
import './History.css'

function History(props){
    if (localStorage.getItem(6)){
        for (var i = 0; i < 6; i++){
            localStorage.setItem(i, localStorage.getItem(i + 1))
        }
        localStorage.setItem(6, props.input + props.emojiprediction)
    }
    else{
        for (var i = 0; i < 7; i++){
            if (!localStorage.getItem(i)){
                localStorage.setItem(
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
                {localStorage.getItem(0)}
            </p>
            <p>
                {localStorage.getItem(1)}
            </p>
            <p>
                {localStorage.getItem(2)}
            </p>
            <p>
                {localStorage.getItem(3)}
            </p>
            <p>
                {localStorage.getItem(4)}
            </p>
            <p>
                {localStorage.getItem(5)}
            </p>
            <p>
                {localStorage.getItem(6)}
            </p>
        </div>
    );
}
export default History;