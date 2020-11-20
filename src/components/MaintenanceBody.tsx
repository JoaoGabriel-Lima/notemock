import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import {MaintenanceContainer} from '../styles/components/maintenanceBody'
function MaintenanceBody(props) {
    const router = useRouter()
    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    function verifyEmail(e) {
        e.preventDefault()
        var emailinput = document.getElementsByClassName('emailbox')
        

        if (emailinput.length > 0) {
            var emailinputvalue = ((document.getElementsByClassName('emailbox')[0] as HTMLInputElement).value);
            if(emailinputvalue == "") {
                notifyButton()
            } else if (validateEmail(emailinputvalue)){
                console.log("Ok!")
                router.push("/congratulations")
            } else {
                notifyButton()
            }
        } else {
            console.log("Não tem nada")
            router.push("/")
        }
    }
    function notifyButton(){
        var btnnl = (document.getElementById('buttonnl') as HTMLButtonElement);
        btnnl.disabled = true;
        setTimeout(function () {
            btnnl.disabled = false;
        }, 1150);
    
    }
    return (
        <MaintenanceContainer>
            <img src={props.src2} alt="" className={props.desktop}/>
            <div className="persistcontent">
                <h1 className="title">{props.title}</h1>
                <p className="description">{props.desc}</p>

                <form className="maxsize">
                    {props.input}
                    
                    
                        <button className="newsletter" id="buttonnl" onClick={verifyEmail}>
                            <a>{props.btn}</a>
                        </button>
                    
                </form>

                <img className={props.mobile} src={props.src1}></img>
            </div>
        </MaintenanceContainer>
    )

}

export default MaintenanceBody;
