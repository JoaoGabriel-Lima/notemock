import Link from 'next/link'
import {MaintenanceContainer} from '../styles/components/maintenanceBody'
function MaintenanceBody(props) {
    return (
        <MaintenanceContainer>
            <img src={props.src2} alt="" className="ui2"/>
            <div className="persistcontent">
                <h1 className="title">{props.title}</h1>
                <p className="description">{props.desc}</p>

                {props.input}
                
                <Link href="/congratulations">
                    <button className="newsletter">
                        <a>{props.btn}</a>
                    </button>
                </Link>

                <img className="ui" src={props.src1}></img>
            </div>
        </MaintenanceContainer>
    )
}

export default MaintenanceBody;