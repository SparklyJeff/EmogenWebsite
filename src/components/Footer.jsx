import Emoji from './Emoji';
import './Footer.css'

function Footer(props){
    if (window.innerWidth > 600){
    return(
        <div className = "pageFooter" id="footer">
            <p className = "footerText">
                Created by Jeffrey Cao, Jordan Tran, and Spencer Zeng
                <Emoji symbol="😎">
                </Emoji>
            </p>
        </div>
    );
    }
    else{
        return(
            <div>
                
            </div>
        )
    }
}
export default Footer;