import Emoji from './Emoji';
import './Footer.css'

function Footer(props){
    return(
        <div className = "pageFooter" id="footer">
            <p>
                Created by Jeffrey Cao, Jordan Tran, and Spencer Zeng
                <Emoji symbol="😎">
                </Emoji>
            </p>
        </div>
    );
}
export default Footer;