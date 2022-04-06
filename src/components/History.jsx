import './History.css'

function History(props){
    if (sessionStorage.getItem(4)){
        for (var i = 0; i < 4; i++){
            sessionStorage.setItem(i, sessionStorage.getItem(i + 1))
        }
        sessionStorage.setItem(4, props.input + props.emojiprediction)
    }
    else{
        for (var j = 0; j < 5; j++){
            if (!sessionStorage.getItem(j)){
                sessionStorage.setItem(
                    j, 
                    props.input + props.emojiprediction
                )
                break
            }
        }
    }
    return(
        <div>
            <p className="historyText">
                {sessionStorage.getItem(0)}
            </p>
            <p className="historyText">
                {sessionStorage.getItem(1)}
            </p>
            <p className="historyText">
                {sessionStorage.getItem(2)}
            </p>
            <p className="historyText">
                {sessionStorage.getItem(3)}
            </p>
            <p className="historyText">
                {sessionStorage.getItem(4)}
            </p>
        </div>
    );
}
export default History;